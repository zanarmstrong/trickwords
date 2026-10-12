// ── Speech ──

// Natural-sounding voices, in order of preference
var PREFERRED_VOICES = [
  'Samantha', 'Zoe', 'Flo', 'Shelley', 'Grandpa', 'Karen', 'Daniel', 'Moira', 'Tessa', // macOS/iOS
  'Google US English', 'Google UK English Female', 'Google UK English Male'
];

function pickBestVoice() {
  var voices = window.speechSynthesis.getVoices();
  for (var p = 0; p < PREFERRED_VOICES.length; p++) {
    for (var v = 0; v < voices.length; v++) {
      if (voices[v].name.indexOf(PREFERRED_VOICES[p]) !== -1) return voices[v];
    }
  }
  // Fallback: any English voice that isn't a low-quality compact/junior one
  return voices.find(function(v) {
    var name = v.name.toLowerCase();
    return v.lang && v.lang.startsWith('en') && !name.includes('compact') && !name.includes('junior');
  }) || null;
}

function speakWord(word) {
  var synth = window.speechSynthesis;
  if (!synth) return;
  synth.cancel();
  var spoken = false;
  function speak() {
    if (spoken) return;
    spoken = true;
    var utt = new SpeechSynthesisUtterance(word);
    utt.rate = 0.85;
    var voice = pickBestVoice();
    if (voice) utt.voice = voice;
    synth.speak(utt);
  }
  // Voices load asynchronously on first use; wait for them, with a fallback
  if (synth.getVoices().length > 0) speak();
  else { synth.onvoiceschanged = speak; setTimeout(speak, 300); }
}

// ── Sound effects ──

// iOS mutes Web Audio when the ringer switch is on silent unless the page
// declares itself as media playback (Safari 16.4+).
if (navigator.audioSession) {
  try { navigator.audioSession.type = 'playback'; } catch(e) {}
}

// One shared AudioContext: mobile browsers cap how many can exist, and iOS
// only lets one start playing from inside a tap.
var audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    var AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    audioCtx = new AudioCtx();
  }
  if (audioCtx.state !== 'running') audioCtx.resume();
  return audioCtx;
}

// Call from a tap handler before any sound is needed. Wakes the AudioContext
// with a silent buffer (older iOS needs this) and primes speech synthesis.
function unlockSound() {
  try {
    var ac = getAudioCtx();
    if (ac) {
      var src = ac.createBufferSource();
      src.buffer = ac.createBuffer(1, 1, 22050);
      src.connect(ac.destination);
      src.start(0);
    }
  } catch(e) {}
  if (window.speechSynthesis) {
    var primer = new SpeechSynthesisUtterance('');
    primer.volume = 0;
    window.speechSynthesis.speak(primer);
  }
}

// A single oscillator with a sharp attack and exponential decay
function playTone(ac, type, freq, volume, decay, when) {
  var osc = ac.createOscillator();
  osc.type = type;
  osc.frequency.value = freq;
  var gain = ac.createGain();
  gain.gain.setValueAtTime(0, when);
  gain.gain.linearRampToValueAtTime(volume, when + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, when + decay);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start(when);
  osc.stop(when + decay + 0.1);
  return osc;
}

// A bell-like note: main tone with a slight pitch settle, plus a quieter
// octave overtone for a richer, piano-like sound.
function playNote(freq, delayMs, type, volume, decay) {
  try {
    var ac = getAudioCtx();
    if (!ac) return;
    var when = ac.currentTime + delayMs / 1000;
    var main = playTone(ac, type, freq, volume, decay, when);
    main.frequency.setValueAtTime(freq * 1.015, when);
    main.frequency.exponentialRampToValueAtTime(freq, when + 0.08);
    playTone(ac, 'triangle', freq * 2, volume * 0.2, decay * 0.5, when);
  } catch(e) { /* skip sound if audio isn't available */ }
}
