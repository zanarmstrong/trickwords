// ── Celebrations: fireworks, hearts and stars drawn on a full-screen canvas ──

var overlay         = document.getElementById('celebration');
var canvas          = document.getElementById('celebration-canvas');
var ctx             = canvas.getContext('2d');
var celebrationWord = document.getElementById('celebration-word');
var startOverBtn    = document.getElementById('start-over-btn');

var FIREWORK_PALETTES = [
  ['#ff6b6b','#ffd93d','#ff9f43','#ff6b81'],
  ['#a29bfe','#fd79a8','#fdcb6e','#74b9ff'],
  ['#55efc4','#81ecec','#00cec9','#fdcb6e'],
  ['#ff7675','#e17055','#fdcb6e','#fab1a0'],
  ['#fd79a8','#e84393','#a29bfe','#ffffff'],
  ['#00b894','#00cec9','#55efc4','#81ecec'],
  ['#ffeaa7','#fdcb6e','#e17055','#d63031'],
  ['#74b9ff','#0984e3','#a29bfe','#ffffff']
];
var HEART_COLORS = ['#ff4d6d','#ff85a1','#ff6b9d','#c9184a','#ffb3c1','#ff0a54'];
var STAR_COLORS  = ['#ffd700','#ffb703','#fb8500','#ff6b35','#ffe066','#ffca3a'];

var DING_FREQ = 1046.5; // C6

// End-of-session melody (pentatonic major): louder notes for the firework
// bursts, softer interleaved notes for the hearts and stars.
var BURST_NOTES = [523.25, 659.25, 784, 880, 1046.5, 1174.66, 1318.5, 784, 1046.5, 659.25, 880, 1318.5];
var BURST_TYPES = ['sine','sine','triangle','sine','sine','triangle','sine','sine','triangle','sine','triangle','sine'];
var SHAPE_NOTES = [880, 1046.5, 784, 1318.5, 659.25, 1174.66, 880, 523.25, 1046.5, 784, 1318.5, 659.25, 880, 1046.5, 784, 523.25];

var particles = [];   // firework sparks
var shapes = [];      // hearts and stars: { type, x, y, color, size, delay, holdMs, fadeMs }
var trailAlpha = 0;   // >0 leaves fading trails behind sparks; 0 clears each frame
var startTime = 0;
var animId = null;
var celebrationCount = 0;
var onStartOver = null;

function random(min, max) { return min + Math.random() * (max - min); }
function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ── Overlay and animation loop ──

function openOverlay(trail) {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = [];
  shapes = [];
  trailAlpha = trail;
  startTime = Date.now();
  overlay.classList.add('active');
  stopAnimation();
  animate();
}

function closeOverlay() {
  stopAnimation();
  overlay.classList.remove('active');
  celebrationWord.classList.remove('show');
}

function stopAnimation() {
  if (animId) cancelAnimationFrame(animId);
  animId = null;
}

function animate() {
  animId = requestAnimationFrame(animate);
  if (trailAlpha) {
    ctx.fillStyle = 'rgba(0,0,0,' + trailAlpha + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  drawParticles();
  var now = Date.now() - startTime;
  shapes.forEach(function(s) { drawShape(s, now - s.delay); });
  ctx.globalAlpha = 1;
}

// ── Fireworks ──

function burstAtRandomSpot() {
  var x = canvas.width  * random(0.15, 0.85);
  var y = canvas.height * random(0.1, 0.6);
  var palette = randomItem(FIREWORK_PALETTES);
  var count = 90;
  for (var i = 0; i < count; i++) {
    var angle = (Math.PI * 2 / count) * i + random(-0.1, 0.1);
    var speed = random(3, 8);
    particles.push({
      x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      radius: random(3, 6),
      color: randomItem(palette),
      decay: random(0.013, 0.02),
      trail: []
    });
  }
  // Bright flash at the centre of the burst
  ctx.save();
  ctx.globalAlpha = 0.9;
  var grad = ctx.createRadialGradient(x, y, 0, x, y, 60);
  grad.addColorStop(0, '#fff');
  grad.addColorStop(0.3, palette[0]);
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, 60, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawParticles() {
  for (var i = particles.length - 1; i >= 0; i--) {
    var p = particles[i];
    p.trail.push({ x: p.x, y: p.y, alpha: p.alpha });
    if (p.trail.length > 6) p.trail.shift();
    ctx.fillStyle = p.color;
    for (var t = 0; t < p.trail.length; t++) {
      var tr = p.trail[t];
      ctx.globalAlpha = tr.alpha * 0.25 * (t / p.trail.length);
      ctx.beginPath();
      ctx.arc(tr.x, tr.y, p.radius * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.vx *= 0.97; p.vy *= 0.97; p.vy += 0.08; // drag and gravity
    p.x += p.vx; p.y += p.vy;
    p.alpha -= p.decay;
    if (p.alpha <= 0) particles.splice(i, 1);
  }
}

// ── Hearts and stars ──

// Pops in with a springy overshoot, holds, then fades out
function drawShape(s, elapsed) {
  if (elapsed < 0) return;
  var size = s.size, alpha = 1;
  if (elapsed < 400) {
    var progress = elapsed / 400;
    size = s.size * (1 + 0.25 * Math.sin(progress * Math.PI));
    alpha = Math.min(1, progress * 3);
  } else if (elapsed > s.holdMs) {
    alpha = Math.max(0, 1 - (elapsed - s.holdMs) / s.fadeMs);
  }
  if (alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = s.color;
  ctx.translate(s.x, s.y);
  if (s.type === 'heart') traceHeart(size); else traceStar(size);
  ctx.fill();
  ctx.restore();
}

function traceHeart(r) {
  var s = r / 14;
  ctx.scale(s, s);
  ctx.beginPath();
  ctx.moveTo(0, -4);
  ctx.bezierCurveTo(6, -14, 18, -4, 0, 12);
  ctx.bezierCurveTo(-18, -4, -6, -14, 0, -4);
  ctx.closePath();
}

function traceStar(r) {
  var spikes = 5;
  ctx.beginPath();
  for (var i = 0; i < spikes * 2; i++) {
    var angle = (i * Math.PI / spikes) - Math.PI / 2;
    var rad = i % 2 === 0 ? r : r * 0.42;
    if (i === 0) ctx.moveTo(Math.cos(angle) * rad, Math.sin(angle) * rad);
    else ctx.lineTo(Math.cos(angle) * rad, Math.sin(angle) * rad);
  }
  ctx.closePath();
}

// ── Public ──

// Short celebration for one word. Cycles through fireworks, hearts and stars,
// then shows and speaks the word at `wordTop` (where the practice word sits).
function celebrateWord(word, wordTop) {
  var effect = ['fireworks', 'heart', 'star'][celebrationCount++ % 3];
  var count = 3 + Math.floor(Math.random() * 4); // 3–6
  openOverlay(effect === 'fireworks' ? 0.18 : 0);

  for (var i = 0; i < count; i++) {
    if (effect === 'fireworks') {
      playNote(DING_FREQ, i * 300, 'sine', 0.6, 1.4);
      setTimeout(burstAtRandomSpot, i * 300);
    } else {
      playNote(DING_FREQ, i * 180, 'sine', 0.6, 1.4);
      shapes.push({
        type: effect,
        x: canvas.width  * random(0.12, 0.88),
        y: canvas.height * random(0.12, 0.67),
        color: (effect === 'heart' ? HEART_COLORS : STAR_COLORS)[i % 6],
        size: random(80, 120),
        delay: i * 180,
        holdMs: 2600,
        fadeMs: 600
      });
    }
  }

  celebrationWord.textContent = word;
  celebrationWord.style.top = wordTop + 'px';
  setTimeout(function() {
    celebrationWord.classList.add('show');
    speakWord(word);
  }, 1300);
  setTimeout(function() { celebrationWord.classList.remove('show'); }, 3200);
  setTimeout(closeOverlay, 3800);
}

// Big finale at the end of a session: fireworks plus hearts and stars, each
// with a note. Freezes on screen with a "Start over" button.
function celebrateEnd(startOver) {
  onStartOver = startOver;
  celebrationWord.textContent = '';
  openOverlay(0.15);

  BURST_NOTES.forEach(function(freq, i) {
    var delay = i * 320;
    playNote(freq, delay, BURST_TYPES[i], 0.45, 1.0 + i * 0.05);
    setTimeout(burstAtRandomSpot, delay);
  });

  var shapeColors = HEART_COLORS.concat(STAR_COLORS);
  SHAPE_NOTES.forEach(function(freq, i) {
    var delay = 500 + i * 230;
    playNote(freq, delay, 'triangle', 0.25, 0.6);
    shapes.push({
      type: i % 3 === 2 ? 'star' : 'heart',
      x: canvas.width  * random(0.06, 0.94),
      y: canvas.height * random(0.06, 0.66),
      color: shapeColors[i % shapeColors.length],
      size: random(55, 110),
      delay: delay,
      holdMs: 3200,
      fadeMs: 800
    });
  });

  // Stop animating but leave the last frame visible
  setTimeout(function() {
    stopAnimation();
    startOverBtn.hidden = false;
  }, 6500);
}

startOverBtn.addEventListener('click', function() {
  startOverBtn.hidden = true;
  closeOverlay();
  if (onStartOver) onStartOver();
});
