# trick-words
game for helping kids practice reading their "trick" (or "sight") words

Word lists follow the Wilson Fundations units. Trick words are taught the
UFLI "heart word" way: the parts of the word that can't be sounded out yet
are marked with a heart, and the rest is decoded as usual.

## Features
- Pick a Fundations level and current unit, and practise words from that unit only, or everything up to it (including earlier levels)
- Choose any mix of trick (heart) words, decodable words and nonsense words
- Settings are remembered in the URL, so a bookmark keeps them
- 🔊 says the word aloud
- 🎆 celebrates the word with fireworks, hearts or stars, then says it
- 🐍 adds the word back in later in the session so it comes up again
- b and d are outlined to help tell them apart
- A big celebration at the end of the session

## Files
- `index.html`: page markup
- `style.css`: styles
- `app.js`: setup and practice screens
- `sound.js`: speech and sound effects
- `celebrations.js`: fireworks, hearts and stars animations
- `fundations-word-lists.js`: Fundations units with their trick, decodable and nonsense words
- `trick-word-hearts.js`: heart parts for every trick word, in brackets (e.g. `"said": "s[ai]d"`).
  Marks what's irregular at the unit where Fundations introduces the word, always including UFLI's permanent hearts.
- `heart_words.json`: the official UFLI heart word cards (permanently irregular parts only), used as the reference for the above

## Running locally
Open `index.html` in a browser. No build step or server needed.
To test on a phone, run `python3 -m http.server 8000` and visit `http://<your-computer-ip>:8000`.

The word list files are JSON wrapped in a `var NAME = ...;` line, so they load
with a plain `<script>` tag even when the page is opened straight from disk.
