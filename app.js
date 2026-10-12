// ── Setup and practice screens ──

var BG_COLORS = [
  '#1a6fe8','#e84040','#d4700a','#7c3aed',
  '#0d9488','#db2777','#16a34a','#b45309',
  '#0284c7','#9333ea'
];
var DEFAULT_COUNT = 30;

var setup        = document.getElementById('setup');
var wordInput    = document.getElementById('word-input');
var countSlider  = document.getElementById('count-slider');
var countNum     = document.getElementById('count-num');
var totalNum     = document.getElementById('total-num');
var startBtn     = document.getElementById('start-btn');

var practice     = document.getElementById('practice');
var resetBtn     = document.getElementById('reset-btn');
var wordDisplay  = document.getElementById('word-display');
var spokenFlash  = document.getElementById('spoken-flash');
var sayBtn       = document.getElementById('say-btn');
var backBtn      = document.getElementById('back-btn');
var celebrateBtn = document.getElementById('celebrate-btn');
var fwdBtn       = document.getElementById('fwd-btn');
var repeatBtn    = document.getElementById('repeat-btn');
var counter      = document.getElementById('word-counter');

var words = [];  // this session's words, in order
var idx = 0;     // index of the word on screen

function parseWords(text) {
  return text.split(/[\s,]+/).filter(function(w) { return w.length > 0; });
}

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// ── Setup screen ──

// The number of words to practise is kept in the URL (?count=) so a
// bookmarked link remembers it.
function getUrlCount() {
  var count = parseInt(new URLSearchParams(window.location.search).get('count'), 10);
  return isNaN(count) ? DEFAULT_COUNT : count;
}

function setUrlCount(count) {
  var params = new URLSearchParams(window.location.search);
  params.set('count', count);
  history.replaceState(null, '', '?' + params.toString());
}

// Range inputs clamp their value to [min, max], so lowering max is enough
// to keep the count within the number of words available.
function syncCountSlider() {
  var total = parseWords(wordInput.value).length;
  countSlider.max = Math.max(total, 1);
  countNum.textContent = countSlider.value;
  totalNum.textContent = total;
  setUrlCount(countSlider.value);
}

function showSetup() {
  practice.classList.remove('active');
  setup.style.display = '';
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

wordInput.value = DEFAULT_WORDS.join(', ');
countSlider.max = DEFAULT_WORDS.length;
countSlider.value = getUrlCount();
syncCountSlider();

wordInput.addEventListener('input', syncCountSlider);
countSlider.addEventListener('input', syncCountSlider);

startBtn.addEventListener('click', function() {
  var all = parseWords(wordInput.value);
  if (all.length === 0) return;
  words = shuffle(all).slice(0, parseInt(countSlider.value, 10));
  idx = 0;
  unlockSound();
  setup.style.display = 'none';
  practice.classList.add('active');
  showWord();
});

// ── Practice screen ──

function showWord() {
  // Restart the pop-in animation
  wordDisplay.style.animation = 'none';
  wordDisplay.offsetHeight;
  wordDisplay.style.animation = '';

  wordDisplay.innerHTML = '';
  words[idx].split('').forEach(function(ch) {
    var span = document.createElement('span');
    if (ch === 'b' || ch === 'd') span.className = 'bd';
    span.textContent = ch;
    wordDisplay.appendChild(span);
  });

  var color = BG_COLORS[idx % BG_COLORS.length];
  practice.style.background = color;
  sayBtn.style.color = color;
  counter.textContent = (idx + 1) + ' / ' + words.length;
  backBtn.disabled = idx === 0;
  fwdBtn.textContent = idx === words.length - 1 ? '🎉' : '→';
}

function goForward() {
  if (idx < words.length - 1) {
    idx++;
    showWord();
  } else {
    celebrateEnd(showSetup);
  }
}

var flashTimer = null;
function showFlash(msg) {
  spokenFlash.textContent = msg;
  spokenFlash.classList.add('show');
  clearTimeout(flashTimer);
  flashTimer = setTimeout(function() { spokenFlash.classList.remove('show'); }, 2500);
}

resetBtn.addEventListener('click', showSetup);

sayBtn.addEventListener('click', function() {
  speakWord(words[idx]);
  showFlash('🔊  ' + words[idx]);
});

backBtn.addEventListener('click', function() {
  if (idx > 0) { idx--; showWord(); }
});

fwdBtn.addEventListener('click', goForward);

celebrateBtn.addEventListener('click', function() {
  celebrateWord(words[idx], wordDisplay.getBoundingClientRect().top);
});

// 🐍 Add a copy of this word at a random later spot (at least a couple of
// words ahead when possible) so it comes up again, then move on.
repeatBtn.addEventListener('click', function() {
  var earliest = Math.min(idx + 3, words.length);
  var pos = earliest + Math.floor(Math.random() * (words.length - earliest + 1));
  words.splice(pos, 0, words[idx]);
  goForward();
});
