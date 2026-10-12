# trick-words
game for helping kids practice reading their "trick" (or "sight") words

## Features
- Pick how many words to practise from an editable list (remembered in the URL as `?count=`)
- 🔊 says the word aloud
- 🎆 celebrates the word with fireworks, hearts or stars, then says it
- 🐍 adds the word back in later in the session so it comes up again
- b and d are outlined to help tell them apart
- A big celebration at the end of the session

## Files
- `index.html` — page markup
- `style.css` — styles
- `words.js` — the default word list (edit this to change the words)
- `sound.js` — speech and sound effects
- `celebrations.js` — fireworks, hearts and stars animations
- `app.js` — setup and practice screens

## Running locally
Open `index.html` in a browser. No build step or server needed.
To test on a phone, run `python3 -m http.server 8000` and visit `http://<your-computer-ip>:8000`.
