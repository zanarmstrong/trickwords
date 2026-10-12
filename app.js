// ── Setup and practice screens ──

var BG_COLORS = [
  '#1a6fe8','#e84040','#d4700a','#7c3aed',
  '#0d9488','#db2777','#16a34a','#b45309',
  '#0284c7','#9333ea'
];
var DEFAULT_COUNT = 30;
var DEFAULT_LEVEL = '1';
var WORD_TYPES = ['trick', 'decodable', 'nonsense'];

var setup        = document.getElementById('setup');
var levelPicker  = document.getElementById('level-picker');
var unitSelect   = document.getElementById('unit-select');
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

var levels = FUNDATIONS.levels;    // from fundations-word-lists.js
var trickHearts = TRICK_WORD_HEARTS; // trick word -> heart mapping, e.g. "said" -> "s[ai]d"
var pool = [];         // words matching the current setup choices
var words = [];        // this session's words, in order: { text, parts }
var idx = 0;           // index of the word on screen

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// Split a heart mapping like "s[ai]d" into parts: bracketed letters are one
// heart part; every other letter is its own regular part.
function parseHearts(mapping) {
  var parts = [], re = /\[([^\]]+)\]|([^\[])/g, m;
  while ((m = re.exec(mapping))) {
    parts.push(m[1] ? { letters: m[1], heart: true } : { letters: m[2], heart: false });
  }
  return parts;
}

// ── Setup screen ──

function currentLevel() {
  var value = setup.elements.level.value;
  return levels.find(function(l) { return String(l.level) === value; });
}

function checkedTypes() {
  return Array.prototype.filter.call(setup.elements.types, function(box) { return box.checked; })
    .map(function(box) { return box.value; });
}

// "This unit only", or everything up to it: all units of earlier levels,
// plus this level's units up to and including it.
function selectedUnits() {
  var unit = parseInt(unitSelect.value, 10);
  var level = currentLevel();
  if (setup.elements.scope.value === 'only') {
    return level.units.filter(function(u) { return u.unit === unit; });
  }
  var units = [];
  for (var i = 0; levels[i] !== level; i++) units = units.concat(levels[i].units);
  return units.concat(level.units.filter(function(u) { return u.unit <= unit; }));
}

function unitWords(u, type) {
  return (type === 'trick' ? u.trickWords : type === 'decodable' ? u.decodableWords : u.nonsenseWords) || [];
}

function hasWords(u) {
  return WORD_TYPES.some(function(type) { return unitWords(u, type).length > 0; });
}

function renderLevels() {
  levelPicker.innerHTML = '';
  levels.forEach(function(l) {
    var label = document.createElement('label');
    label.innerHTML = '<input type="radio" name="level"><span></span>';
    label.querySelector('input').value = l.level;
    label.querySelector('span').textContent = l.level;
    levelPicker.appendChild(label);
  });
}

function renderUnits() {
  unitSelect.innerHTML = '';
  currentLevel().units.forEach(function(u) {
    var option = document.createElement('option');
    option.value = u.unit;
    option.textContent = 'Unit ' + u.unit + ': ' + u.skills[0];
    unitSelect.appendChild(option);
  });
}

function firstUnitWithWords() {
  return currentLevel().units.find(hasWords).unit;
}

// Rebuild the word pool from the current choices, update the counts and the
// slider, and remember the choices in the URL so a bookmark keeps them.
// Levels repeat some words (Level 1 reteaches Level K), so words are counted
// and practised once each.
function syncPool() {
  var units = selectedUnits(), types = checkedTypes(), inPool = {};
  pool = [];
  WORD_TYPES.forEach(function(type) {
    var unique = {};
    units.forEach(function(u) {
      unitWords(u, type).forEach(function(text) { unique[text] = true; });
    });
    var texts = Object.keys(unique);
    setup.querySelector('[data-count="' + type + '"]').textContent = texts.length;
    if (types.indexOf(type) === -1) return;
    texts.forEach(function(text) {
      if (inPool[text]) return;
      inPool[text] = true;
      var mapping = type === 'trick' ? (trickHearts[text] || text) : text;
      pool.push({ text: text, parts: parseHearts(mapping) });
    });
  });

  // Range inputs clamp their value to [min, max], so lowering max is enough
  countSlider.max = Math.max(pool.length, 1);
  countNum.textContent = pool.length ? countSlider.value : 0;
  totalNum.textContent = pool.length;
  startBtn.disabled = pool.length === 0;

  var params = new URLSearchParams();
  params.set('level', setup.elements.level.value);
  params.set('unit', unitSelect.value);
  params.set('scope', setup.elements.scope.value);
  params.set('types', types.join(','));
  params.set('count', countSlider.value);
  history.replaceState(null, '', '?' + params.toString());
}

// Restore choices from the URL, falling back to defaults
function restoreSettings() {
  var params = new URLSearchParams(window.location.search);
  var level = params.get('level');
  if (!levels.some(function(l) { return String(l.level) === level; })) level = DEFAULT_LEVEL;
  setup.elements.level.value = level;
  renderUnits();

  var unit = params.get('unit');
  var hasUnit = currentLevel().units.some(function(u) { return String(u.unit) === unit; });
  unitSelect.value = hasUnit ? unit : firstUnitWithWords();

  if (params.get('scope') === 'only') setup.elements.scope.value = 'only';
  if (params.has('types')) {
    var types = params.get('types').split(',');
    Array.prototype.forEach.call(setup.elements.types, function(box) {
      box.checked = types.indexOf(box.value) !== -1;
    });
  }
  // Max must be raised before the value is set, or the value gets clamped
  countSlider.max = 1000;
  countSlider.value = parseInt(params.get('count'), 10) || DEFAULT_COUNT;
}

function showSetup() {
  practice.classList.remove('active');
  setup.style.display = '';
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

setup.addEventListener('change', function(e) {
  if (e.target.name === 'level') {
    renderUnits();
    unitSelect.value = firstUnitWithWords();
  }
  syncPool();
});
countSlider.addEventListener('input', syncPool);

setup.addEventListener('submit', function(e) {
  e.preventDefault();
  if (pool.length === 0) return;
  words = shuffle(pool).slice(0, parseInt(countSlider.value, 10));
  idx = 0;
  unlockSound();
  setup.style.display = 'none';
  practice.classList.add('active');
  showWord();
});

renderLevels();
restoreSettings();
syncPool();

// ── Practice screen ──

// Each part is a column: its letters, plus a heart underneath if it's a
// heart part. Heart parts with more than one letter are underlined.
function showWord() {
  // Restart the pop-in animation
  wordDisplay.style.animation = 'none';
  wordDisplay.offsetHeight;
  wordDisplay.style.animation = '';

  document.documentElement.style.setProperty('--letters', Math.max(words[idx].text.length, 4));
  wordDisplay.innerHTML = '';
  words[idx].parts.forEach(function(part) {
    var partEl = document.createElement('span');
    partEl.className = 'part' + (part.heart ? ' heart' : '') + (part.letters.length > 1 ? ' multi' : '');
    var lettersEl = document.createElement('span');
    lettersEl.className = 'letters';
    part.letters.split('').forEach(function(ch) {
      var span = document.createElement('span');
      if (ch === 'b' || ch === 'd') span.className = 'bd';
      span.textContent = ch;
      lettersEl.appendChild(span);
    });
    partEl.appendChild(lettersEl);
    wordDisplay.appendChild(partEl);
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
  speakWord(words[idx].text);
  showFlash('🔊  ' + words[idx].text);
});

backBtn.addEventListener('click', function() {
  if (idx > 0) { idx--; showWord(); }
});

fwdBtn.addEventListener('click', goForward);

celebrateBtn.addEventListener('click', function() {
  celebrateWord(words[idx].text, wordDisplay.getBoundingClientRect().top);
});

// 🐍 Add a copy of this word at a random later spot (at least a couple of
// words ahead when possible) so it comes up again, then move on.
repeatBtn.addEventListener('click', function() {
  var earliest = Math.min(idx + 3, words.length);
  var pos = earliest + Math.floor(Math.random() * (words.length - earliest + 1));
  words.splice(pos, 0, words[idx]);
  goForward();
});
