// Fundations units with their trick, decodable and nonsense words.
// Stored as a script (not .json) so the page works when opened directly from disk.
var FUNDATIONS = {
  "about": {
    "curriculum": "Wilson Fundations, Second Edition (2012) unit structure",
    "trickWords": "Taken from Wilson's published Level K and Level 2 trick word lists (as posted by school districts) and from school pages listing Level 1 trick words by unit.",
    "decodableWords": "NOT Wilson's own word lists (those are in the teacher's manual and aren't published online). Real words chosen to fit each unit, using only patterns taught up to that unit. Each word was checked against the CMU Pronouncing Dictionary so its vowel sounds actually match the pattern (this removes look-alikes such as 'put', 'son', 'monkey'), ordered most-common first using a large spoken-English frequency list, with names, trick words, and adult or violent words removed. Words that need Level 3 skills (doubling: 'getting'; dropping e: 'taking'; schwa: 'attack', 'along') are excluded. Unit 'sampleWordsFromSchools' are the few example words school sites cite.",
    "caveat": "Check unit numbers against your daughter's take-home 'Home Support' letters. Some districts run an older edition with different unit contents and trick words.",
    "nonsenseWords": "Made-up words built only from patterns taught up to that unit. Each was checked to be not a real word, not a name, not pronounced like a real word (e.g. 'kat'), and not resembling a slur, swear word, or rude word, including sound-alike spellings.",
    "wordSources": "CMU Pronouncing Dictionary; hermitdave/FrequencyWords (OpenSubtitles English); WordNet 3.0."
  },
  "levels": [
    {
      "level": "K",
      "units": [
        {
          "unit": 1,
          "skills": ["Letter-keyword-sound for consonants and short vowels", "Lowercase letter formation", "Rhyming", "Initial and final sounds"],
          "keywords": {
            "a": "apple",
            "b": "bat",
            "c": "cat",
            "d": "dog",
            "e": "Ed",
            "f": "fun",
            "g": "game",
            "h": "hat",
            "i": "itch",
            "j": "jug",
            "k": "kite",
            "l": "lamp",
            "m": "man",
            "n": "nut",
            "o": "octopus",
            "p": "pan",
            "q": "queen",
            "r": "rat",
            "s": "snake",
            "t": "top",
            "u": "up",
            "v": "van",
            "w": "wind",
            "x": "fox",
            "y": "yellow",
            "z": "zebra"
          },
          "keywordsNote": "Keywords from memory, not verified against a source in this search. Check against her sound card/poster.",
          "decodableWords": [],
          "nonsenseWords": [],
          "listNotes": ["Letter-sound unit: no words to read yet, so no nonsense words."],
          "trickWords": []
        },
        {
          "unit": 2,
          "skills": ["Blending and reading three-sound short vowel (CVC) words", "Alphabetical order", "Uppercase letter formation"],
          "sampleWordsFromSchools": ["map", "sad", "rat"],
          "decodableWords": ["map", "sad", "rat", "cat", "dog", "sit", "pig", "hop", "bed", "cup", "sun", "red", "hat", "pen", "big", "top", "mud", "wig", "jet", "lip", "it", "in", "on", "not", "but", "get", "if", "up", "at", "got", "did", "let", "yes", "us", "had", "lot", "dad", "bad", "mom", "job", "bit", "yet", "men", "run", "kid", "hit", "fun", "set", "cut", "met", "six", "hot", "win", "ten", "bet", "mad", "bag", "box", "fix", "cop"],
          "nonsenseWords": ["lig", "zet", "yub", "gup", "lup", "bep", "rup", "fub", "hib", "rop", "fud", "jub", "pab", "cug", "zud", "wum", "mup", "peb", "yug", "nep", "mip", "vib", "hig", "wub"],
          "trickWords": []
        },
        {
          "unit": 3,
          "skills": ["Segmenting and spelling three-sound short vowel words", "Blending nonsense CVC words", "Trick words introduced"],
          "sampleWordsFromSchools": ["cut", "tap", "wet"],
          "decodableWords": ["tap", "wet", "fit", "log", "rug", "nap", "hip", "pot", "bun", "lid", "web", "mop", "tub", "dig", "net", "rib", "sob", "bus", "rid", "fat", "bob", "gas", "leg", "pop", "beg", "lab", "pal", "led", "sat", "rob", "tip", "cab", "hug", "fed", "bud", "rip", "mix", "fox", "tax", "bat", "cap", "lad", "bug", "pet", "pit", "ad", "pat", "hid", "kit", "pin", "lap", "rub", "bid", "nut", "tag", "gut", "lit", "hut", "gig", "bin"],
          "nonsenseWords": ["meb", "gub", "vop", "jop", "vix", "gug", "jit", "fep", "zid", "wud", "lut", "tep", "fip", "lub", "beb", "zex", "wup", "teb", "kep", "yab", "deg", "nux", "rux", "heg"],
          "trickWords": ["the", "a", "and", "are", "to", "is", "his", "as", "has", "was"],
          "trickWordsByWeek": {
            "3": ["the", "a", "and", "are", "to"],
            "4": ["is", "his"],
            "5": ["as", "has"],
            "6": ["was"]
          }
        },
        {
          "unit": 4,
          "skills": ["Digraphs: wh, ch, sh, th, ck", "Reading and spelling three-sound words with digraphs", "ck at the end of words"],
          "sampleWordsFromSchools": ["bath", "chop", "thick"],
          "decodableWords": ["bath", "chop", "thick", "ship", "shop", "fish", "wish", "dish", "math", "path", "chin", "chip", "much", "rich", "such", "whip", "back", "duck", "sock", "kick", "neck", "rock", "that", "them", "then", "this", "with", "moth", "shut", "which", "check", "pick", "cash", "thin", "whack", "chat", "sick", "rush", "thus", "whim", "chick", "luck", "shock", "thud", "chap", "lock", "shed", "chum", "pack", "ash", "lack", "hush", "deck", "rash", "buck", "dash", "sack", "shin", "lick", "bash", "hack", "shack", "dock", "mash", "tick", "mush", "rack", "shun", "tuck", "lash", "mock", "sash", "peck", "mesh", "muck", "gush", "puck", "tack", "wick"],
          "nonsenseWords": ["shick", "cheth", "theb", "gack", "whem", "tuth", "chush", "sish", "shid", "choth", "wheck", "duth", "zick", "poth", "chob", "dush", "nith", "chag", "bith", "thith", "whep", "jath", "thath", "jesh"],
          "listNotes": ["Only 79 real words fit this unit's pattern after filtering (target was 90)."],
          "trickWords": ["we", "she", "he", "be", "me", "I", "you", "they"],
          "trickWordsByWeek": {
            "1": ["we", "she", "he"],
            "2": ["be", "me"],
            "3": ["I", "you"],
            "4": ["they"]
          }
        },
        {
          "unit": 5,
          "skills": ["Review: three-sound words with and without digraphs", "Sentence reading and dictation"],
          "skillsNote": "Exact Unit 5 skill list not confirmed in sources found.",
          "decodableWords": ["jog", "yum", "zip", "gum", "rap", "tin", "sum", "dug", "rod", "rot", "den", "fog", "rig", "dot", "dip", "pad", "wax", "mug", "gap", "peg", "vet", "nun", "pod", "kin", "sip", "tab", "fax", "hen", "hum", "gag", "wit", "rag", "ox", "mat", "fin", "hog", "nod", "tad", "dim", "cub", "ax", "cod", "wed", "pep", "jab", "mid", "nag", "nip"],
          "nonsenseWords": ["keth", "thab", "thog", "soth", "kesh", "zuck", "cheb", "cax", "yath", "vuck", "chuth", "veb", "whum", "zug", "besh", "chosh", "fush", "gom", "sosh", "weth", "thuth", "nuth", "neth", "shesh"],
          "trickWords": ["or", "for", "of", "have", "from", "by", "my", "do", "one"],
          "trickWordsByWeek": {
            "1": ["or", "for"],
            "2": ["of", "have"],
            "3": ["from"],
            "4": ["by", "my"],
            "5": ["do"],
            "6": ["one"]
          }
        }
      ]
    },
    {
      "level": "1",
      "units": [
        {
          "unit": 1,
          "skills": ["Letter-keyword-sound review: consonants and short vowels", "Digraphs wh, ch, sh, th, ck (keywords: whistle, chin, ship, thumb, sock)"],
          "decodableWords": [],
          "nonsenseWords": [],
          "listNotes": ["Letter-sound unit: no words to read yet, so no nonsense words."],
          "trickWords": []
        },
        {
          "unit": 2,
          "skills": ["Blending, reading, spelling three-sound short vowel words", "Sound tapping"],
          "decodableWords": ["sat", "map", "tip", "mop", "hug", "pet", "bit", "rug", "jog", "wet", "dig", "cub", "pot", "lid", "fig", "nap", "sip", "hen", "tub", "cot", "peg", "rib", "mud", "kit", "it", "in", "on", "not", "but", "get", "if", "up", "at", "got", "did", "let", "yes", "us", "had", "big", "lot", "dad", "bad", "mom", "job", "yet", "men", "run", "sit", "kid", "hit", "fun", "set", "cut", "met", "bed", "dog", "six", "hot", "red", "top", "win", "ten", "bet", "mad", "bag", "sun", "box", "fix", "sad", "cop", "cat"],
          "nonsenseWords": ["mub", "tud", "rup", "cug", "teb", "lub", "veb", "beb", "lup", "hib", "gub", "mip", "heg", "cax", "deg", "zet", "vud", "yop", "jit", "pux", "wup", "jub", "zab", "rop"],
          "trickWords": ["the", "a", "and", "is", "his", "of"]
        },
        {
          "unit": 3,
          "skills": ["Digraphs in three-sound words", "ck spelling at end of word after short vowel"],
          "sampleWordsFromSchools": ["wish", "chop", "sock"],
          "decodableWords": ["wish", "chop", "sock", "bath", "with", "moth", "thin", "that", "path", "dash", "ship", "chin", "back", "lock", "math", "deck", "neck", "dish", "shed", "lick", "such", "much", "rich", "whip", "luck", "duck", "sick", "this", "which", "shut", "check", "pick", "them", "whack", "fish", "chat", "rock", "then", "whim", "shop", "chick", "kick", "thick", "cash", "chip", "pack", "thus", "rush", "chap", "lack", "thud", "shock", "chum", "buck", "ash", "sack", "hush", "hack", "rash", "dock", "shin", "tick", "bash", "rack", "shack", "tuck", "mash", "mock", "mush", "peck", "shun", "muck", "lash", "puck", "sash", "tack", "mesh", "wick", "gush"],
          "nonsenseWords": ["chush", "lish", "weck", "shog", "rish", "whud", "chosh", "feth", "juck", "hish", "kesh", "thip", "foth", "shick", "jash", "chod", "hith", "nesh", "suth", "thib", "keth", "chath", "dush", "thosh"],
          "listNotes": ["Only 79 real words fit this unit's pattern after filtering (target was 84)."],
          "trickWords": ["as", "has", "to", "into", "we", "he", "she", "be", "me", "for", "or"]
        },
        {
          "unit": 4,
          "skills": ["Bonus letter rule: ff, ll, ss, zz after a short vowel at the end of a one-syllable word", "Glued sound: all"],
          "decodableWords": ["off", "puff", "huff", "cuff", "bell", "fill", "hill", "doll", "dull", "tell", "well", "will", "mess", "kiss", "less", "boss", "fuss", "miss", "buzz", "jazz", "fizz", "fuzz", "ball", "call", "fall", "hall", "tall", "wall", "mall", "shell", "chill", "all", "till", "pass", "buff", "sell", "loss", "whiff", "bill", "mass", "fell", "toss", "ill", "chess", "yell", "bass", "pill", "moss", "mill", "hiss", "hull", "dill", "gull", "lull", "sill", "mull"],
          "nonsenseWords": ["rull", "seff", "shozz", "suzz", "juzz", "ruzz", "zezz", "jall", "maff", "chall", "chuss", "yall", "vall", "nall", "fiff", "peff", "cheff", "kizz", "tuzz", "thaff", "theff", "tozz", "thall", "shezz"],
          "listNotes": ["Only 56 real words fit this unit's pattern after filtering (target was 93)."],
          "trickWords": ["you", "your", "I", "they", "was", "one", "said"]
        },
        {
          "unit": 5,
          "skills": ["Glued sounds: am, an"],
          "sampleWordsFromSchools": ["ham", "can", "fan"],
          "decodableWords": ["ham", "can", "fan", "jam", "ram", "yam", "man", "pan", "ran", "tan", "van", "than", "am", "ban", "dam", "sham", "wham"],
          "nonsenseWords": ["tham", "vam", "zam"],
          "listNotes": ["Only 17 real words fit this unit's pattern after filtering (target was 45).", "Almost every am/an word is a real word or a name, so only 3 nonsense words exist for this unit."],
          "trickWords": ["from", "have", "do", "does"]
        },
        {
          "unit": 6,
          "skills": ["Baseword and suffix -s"],
          "decodableWords": ["cats", "maps", "pigs", "bugs", "hats", "beds", "cups", "dogs", "kicks", "ducks", "ships", "chops", "bells", "fans", "jams", "balls", "pens", "webs", "tubs", "pots", "kids", "gets", "calls", "lots", "legs", "tells", "nuts", "bucks", "runs", "jobs", "walls", "lips", "pills", "bags", "falls", "rocks", "hits", "wins", "lets", "guts", "bills", "hills", "sets", "rats", "chips", "lads", "fits", "checks", "socks", "bits", "cuts", "pops", "yells", "chicks", "sits", "sobs", "backs", "tips", "bets", "wells"],
          "nonsenseWords": ["hegs", "fubs", "thags", "lups", "whecks", "thobs", "lubs", "feths", "yocks", "wecks", "cheds", "fuds", "wubs", "beps", "rops", "shibs", "chegs", "cugs", "mups", "gups", "hiths", "jops", "thucks", "shigs"],
          "trickWords": ["were", "are", "who", "what", "when", "where", "there", "here"]
        },
        {
          "unit": 7,
          "skills": ["Glued sounds: ang, ing, ong, ung, ank, ink, onk, unk"],
          "sampleWordsFromSchools": ["bang", "bank", "pink"],
          "decodableWords": ["bang", "bank", "pink", "rang", "sang", "king", "ring", "sing", "wing", "thing", "long", "song", "hung", "rung", "lung", "tank", "sank", "thank", "sink", "wink", "think", "honk", "junk", "bunk", "dunk", "chunk", "sunk", "kings", "things", "thanks", "hang", "thinks", "rings", "songs", "punk", "lungs", "honks", "banks", "hangs", "link", "wings", "gong", "chunks", "sung", "bonk", "tanks", "bangs", "ink", "sings", "bunks", "rungs", "rank", "fang", "links", "dings", "ranks", "fangs", "mink", "ding", "yank", "pang", "sinks", "ping", "yanks", "pangs", "rink", "zing", "shank", "winks", "pings", "dank", "pinks", "shanks"],
          "nonsenseWords": ["vong", "sonk", "shong", "ponk", "shunk", "vank", "pank", "runk", "chonk", "nink", "yunk", "fank", "fonk", "nank", "thonk", "zunk", "tunk", "lunk", "wunk", "zung", "jink", "ronk", "lonk", "shink"],
          "listNotes": ["Only 73 real words fit this unit's pattern after filtering (target was 87)."],
          "trickWords": ["why", "by", "my", "try", "put", "two", "too", "very", "also", "some", "come"]
        },
        {
          "unit": 8,
          "skills": ["Consonant blends and digraph blends", "Words with up to four sounds", "Suffix -s on four-sound words"],
          "decodableWords": ["flag", "stop", "clap", "drum", "frog", "crab", "snap", "spin", "step", "trip", "grin", "plum", "best", "fast", "jump", "mask", "list", "milk", "belt", "desk", "tent", "hand", "chest", "shift", "shrub", "flags", "steps", "drums", "just", "still", "hands", "help", "bring", "land", "must", "stuff", "band", "last", "black", "camp", "left", "plan", "pants", "ask", "small", "sand", "next", "glad", "ranch", "went", "drop", "lands", "end", "quick", "lamp", "lost", "class", "champ", "rest", "club", "bands", "send", "stick", "ants", "fact", "dress", "ant", "sent", "smell", "camps", "past", "quit", "sands", "felt", "glass", "damp", "act", "truck", "ramp", "kept", "grab", "lamps", "film", "stuck"],
          "nonsenseWords": ["lusp", "brep", "smom", "chulp", "frit", "thesk", "snull", "smoss", "dapt", "clom", "wift", "smeb", "shamp", "jamp", "crun", "moft", "melp", "buft", "throm", "shint", "yusk", "prun", "plid", "gomp"],
          "trickWords": ["would", "could", "should", "her", "over", "number"]
        },
        {
          "unit": 9,
          "skills": ["Closed syllable concept (one vowel, closed in by a consonant, short sound)", "Closed vs. open syllable"],
          "decodableWords": ["spot", "crop", "swim", "skip", "held", "gift", "soft", "trim", "flat", "brick", "slung", "cast", "pond", "sled", "test", "press", "lunch", "cross", "wind", "track", "risk", "fresh", "west", "skin", "bunch", "plus", "cost", "trick", "lift", "staff", "rent", "block", "hunt", "clock", "punch", "bless", "dust", "crash", "dump", "trap", "task", "crack", "self", "spell", "golf", "drag", "bond", "trash", "lend", "stock", "tend", "flesh", "bend", "slip"],
          "nonsenseWords": ["glazz", "plesh", "stid", "dift", "smat", "jand", "shilp", "drob", "drezz", "felp", "brup", "rosp", "crosh", "crot", "jusk", "glosh", "throzz", "treth", "prub", "shrep", "yomp", "bamp", "blull", "folf"],
          "trickWords": ["say", "says", "see", "between", "each"]
        },
        {
          "unit": 10,
          "skills": ["Words with five sounds", "Suffix -s on five-sound words", "Suffixes -ed and -ing on unchanging basewords with closed syllables"],
          "decodableWords": ["strap", "scrap", "split", "strip", "stand", "crust", "blend", "print", "splash", "jumped", "rested", "helped", "filled", "melting", "singing", "landed", "kicking", "packing", "fishing", "wished", "rushing", "camping", "stamps", "plants", "thinking", "drink", "asked", "grunts", "text", "telling", "trust", "missed", "drinks", "asking", "strong", "passed", "stands", "calling", "spend", "picked", "prints", "missing", "spent", "locked", "stinks", "standing", "grand", "dressed", "strings", "drinking", "slept", "checked", "springs", "grunting", "spring", "ended", "texts", "helping", "plant", "fixed", "trusts", "ringing", "grant", "kicked", "trunks", "acting", "blast", "kissed", "blanks", "willing", "stress", "mixed"],
          "nonsenseWords": ["brunk", "splob", "grulp", "scrib", "splug", "shronk", "crang", "nomped", "pruthing", "scrig", "strig", "rezzed", "scrock", "strim", "strug", "trunded", "greshed", "prathing", "lozzed", "grond", "thromp", "nefted", "splab", "bapting"],
          "trickWords": ["any", "many", "how", "now", "down", "out", "about", "our"]
        },
        {
          "unit": 11,
          "skills": ["Vowel-consonant-e syllable in one-syllable words", "Long vowel sounds"],
          "decodableWords": ["cake", "name", "bike", "time", "hope", "rope", "cute", "mule", "these", "lake", "game", "ride", "kite", "home", "bone", "tube", "flute", "shine", "smile", "plate", "stripe", "made", "five", "like", "take", "those", "rules", "theme", "life", "make", "close", "rule", "themes", "fine", "came", "broke", "rude", "while", "same", "joke", "tune", "wife", "case", "hole", "fuse", "times", "late", "stole", "tubes", "mine", "gave", "nose", "mute", "quite", "makes", "stone", "brute", "side", "save", "rose", "crude", "line", "safe", "code", "cube", "white", "date", "note", "tunes", "drive", "takes", "spoke"],
          "nonsenseWords": ["prane", "twupe", "brode", "screbe", "neme", "splike", "sprupe", "crute", "tefe", "sprobe", "sibe", "trabe", "shabe", "fufe", "drote", "kife", "swule", "mobe", "vune", "dife", "frune", "shofe", "nume", "drete"],
          "trickWords": ["friend", "other", "another", "none", "nothing"]
        },
        {
          "unit": 12,
          "skills": ["Compound words and two-syllable words", "Syllable division between closed syllables"],
          "sampleWordsFromSchools": ["catnip", "publish"],
          "decodableWords": ["catnip", "publish", "sunset", "cobweb", "upset", "hotdog", "bathtub", "laptop", "napkin", "picnic", "muffin", "goblin", "rabbit", "pumpkin", "contest", "insect", "until", "hilltop", "cupcake", "sunshine", "bedtime", "inside", "pancake", "reptile", "problem", "second", "children", "himself", "mistake", "finish", "suppose", "unless", "seven", "present", "public", "within", "visit", "contact", "hundred", "upon", "planet", "kitchen", "address", "level", "itself", "common", "bottom", "travel", "credit", "discuss", "ticket", "model", "signal", "contract", "sudden", "lesson", "subject", "pocket", "invite", "statement", "jacket", "traffic", "talent", "metal", "dragon", "button", "progress", "kingdom", "robin", "object", "mental", "panic"],
          "nonsenseWords": ["sonplute", "yudvuke", "lobmub", "detmick", "muddude", "sobdrot", "pobblane", "tipbath", "teplamp", "fodfloke", "badprafe", "pagflote", "diptweck", "lipdug", "jagblot", "yatmab", "gudblub", "fogcax", "topspump", "medbest", "caplone", "petsmath", "gonspete", "fabtule"],
          "trickWords": ["people", "month", "little", "been", "own", "want", "Mr.", "Mrs."]
        },
        {
          "unit": 13,
          "skills": ["Suffixes -s, -ing, -ed on multisyllabic words", "Suffix -es on basewords ending in s, x, z, sh, ch"],
          "decodableWords": ["dishes", "wishes", "glasses", "kisses", "benches", "lunches", "brushes", "classes", "boxes", "foxes", "fixes", "buzzes", "contests", "napkins", "insects", "sunsets", "cupcakes", "publishing", "finished", "punished", "invented", "happened", "happens", "happening", "passes", "impressed", "problems", "visiting", "ashes", "talented", "seconds", "traveling", "taxes", "visited", "tickets", "finishing", "inches", "limited", "hundreds", "discussing", "dresses", "intended", "mistakes", "editing", "misses", "dismissed", "presents", "punishing", "bosses", "infected", "lessons", "modeling", "losses", "insisted", "levels", "distracting", "branches", "discussed", "pockets", "insisting", "crashes", "suspended", "adults", "investing", "addresses", "published"],
          "nonsenseWords": ["lugrinted", "glusses", "skishes", "panglists", "dugblonded", "fluzzes", "tatfamping", "bemlusted", "lomflecked", "bepglocked", "clishes", "lozzes", "lazzes", "megtromps", "momhists", "brosses", "degshromps", "blishes", "megtrumps", "bagslunds", "runsmanted", "brezzes", "frusses", "stozzes"],
          "trickWords": ["work", "word", "write", "being", "their", "first", "look", "good", "new"]
        },
        {
          "unit": 14,
          "skills": ["Review of Level 1 (some schools: vowel-consonant-e review)"],
          "decodableWords": ["stamp", "shrimp", "trunk", "stripes", "trucks", "smashed", "bedrock", "drumstick", "state", "wake", "miles", "hide", "sake", "likes", "plane", "gasps", "mate", "blame", "nine", "names", "plans", "shame", "hanging", "states", "file", "tape", "vote", "bringing", "size", "games", "fake", "strike", "male", "base", "selling", "falling"],
          "nonsenseWords": ["sabhub", "mobsime", "namp", "ridhants", "brept", "thript", "delped", "logstog", "shremping", "shring", "higflug", "sezzes", "thrund", "temspog", "slafe", "shrong", "bapshrend", "tresp", "clisking", "muptroth", "sprin", "blofting", "smon", "tremp"],
          "trickWords": ["water", "called", "day", "may", "way"]
        }
      ]
    },
    {
      "level": "2",
      "units": [
        {
          "unit": 1,
          "skills": ["Review digraphs, blends, digraph blends", "Closed syllable type"],
          "decodableWords": ["blast", "chimp", "crust", "frost", "shrimp", "splint", "sprint", "thrust", "brunch", "clamp", "script", "scrub", "shred", "trench", "just", "help", "still", "must", "stop", "last", "left", "ask", "next", "went", "best", "bring", "end", "lost", "stuff", "drink", "rest", "stand", "trust", "send", "fact", "black", "plan", "sent", "small", "past", "glad", "fast"],
          "nonsenseWords": ["shrast", "praft", "flist", "swush", "trusk", "drond", "smuck", "thript", "spelf", "flesk", "twesk", "bropt", "blolf", "twump", "flunt", "plupt", "pleft", "brilf", "trasp", "sprist", "glisp", "slisk", "prist", "stond"],
          "trickWords": []
        },
        {
          "unit": 2,
          "skills": ["Bonus letter rule", "Glued sounds: all, am, an, ang, ing, ong, ung, ank, ink, onk, unk"],
          "sampleWordsFromSchools": ["spill", "string", "stand", "toss"],
          "decodableWords": ["spill", "string", "smell", "stiff", "class", "stall", "crank", "blink", "plank", "skunk", "strong", "spring", "flung", "swing", "plant", "dress", "grand", "staff", "grant", "spell", "trunk", "drank", "branch", "clan", "stink", "stamp", "sting", "slam", "strung", "clang", "throng", "squall", "glass", "brand", "cliff", "slant", "skull", "shrunk", "blank", "scan", "shrink", "cramp", "fling", "scram", "sprung", "slang", "press", "strand", "bluff", "scant", "drill", "flunk", "prank", "span"],
          "nonsenseWords": ["smuzz", "flizz", "snoll", "smuss", "sniss", "stroff", "sploff", "smunk", "spling", "sprank", "scran", "snam", "blozz", "blang", "thran", "glunk", "scrank", "thrank", "crell", "threll", "slonk", "glell", "struff", "glonk"],
          "trickWords": ["shall", "full", "pull", "both", "talk", "walk"]
        },
        {
          "unit": 3,
          "skills": ["Closed syllable exceptions / glued sounds: ild, ind, old, olt, ost (vowel is long)"],
          "decodableWords": ["wild", "mild", "child", "kind", "find", "mind", "blind", "grind", "cold", "bold", "gold", "hold", "told", "fold", "scold", "bolt", "colt", "jolt", "most", "host", "post", "old", "finding", "posted", "wildlife", "bolts", "holding", "finds", "postpone", "grandchild", "bolted", "sold", "kinds", "hostess", "wildcat", "volts", "holds", "minds", "posts", "childlike", "colts", "mold", "mankind", "utmost", "wildcats", "volt", "threshold", "bind", "hosting", "wilds", "bolting", "goldfish", "blinded", "posting", "folded", "findings", "hosts", "uphold", "grinding", "postal", "folding", "winding", "hosted"],
          "nonsenseWords": ["blold", "spold", "spolt", "lold", "crost", "pold", "frolt", "plind", "slind", "drost", "lild", "snolt", "zild", "nolt", "crold", "flolt", "jild", "flost", "crind", "shild", "brolt", "throld", "thrind", "thost"],
          "trickWords": ["done", "goes", "pretty"]
        },
        {
          "unit": 4,
          "skills": ["Review suffixes -s, -es, -ed, -ing", "Three sounds of -ed: /ed/, /d/, /t/", "Vowel vs. consonant suffixes"],
          "decodableWords": ["rested", "landed", "hunted", "handed", "jumped", "kissed", "crashed", "fished", "bumped", "filled", "yelled", "spilled", "smelled", "fastest", "softer", "thankful", "helpless", "selfish", "sickness", "after", "things", "thinking", "asked", "quickly", "chicken", "glasses", "grateful", "madness", "homeless", "oldest", "childish", "master", "thanks", "telling", "missed", "suddenly", "golden", "wishes", "helpful", "illness", "hopeless", "strongest", "longer", "kids", "asking", "passed", "lately", "fallen", "boxes", "handful", "kindness", "endless", "longest", "offer", "times", "calling", "picked"],
          "decodableNote": "Which consonant suffixes (-ful, -less, -ness, etc.) appear in Level 2 Unit 4 wasn't confirmed; drop them if her unit doesn't cover them.",
          "nonsenseWords": ["hupted", "brospless", "cleshless", "croshless", "tiskish", "spufts", "flunting", "stolfless", "smondest", "stuftish", "yolps", "roftful", "solped", "crented", "frisping", "glents", "smantless", "chethed", "fufted", "zethful", "grathish", "sloptful", "blunded", "juntness"],
          "trickWords": ["again", "please", "animal", "sure", "use", "used"]
        },
        {
          "unit": 5,
          "skills": ["Multisyllabic words with closed syllables", "Syllable division between closed syllables", "Compound words"],
          "decodableWords": ["muffin", "goblin", "publish", "problem", "absent", "contest", "dentist", "hundred", "mattress", "insect", "fantastic", "sandbox", "uphill", "himself", "sunfish", "basketball", "until", "second", "children", "hospital", "president", "finish", "unless", "seven", "present", "difficult", "public", "within", "visit", "upset", "contact", "upon", "planet", "kitchen", "address", "level", "itself", "medical", "common", "bottom", "travel", "credit", "discuss", "ticket", "model", "signal", "contract", "sudden", "lesson", "subject", "pocket"],
          "nonsenseWords": ["humstend", "nuntebjip", "rebnash", "zitdrond", "puggrin", "ruttig", "hapsand", "satcrant", "ponmepdrin", "demswint", "yabrug", "radslomp", "gupmesh", "diptupprin", "panrosh", "fimtudtwem", "tobzapgosh", "hubheg", "cugfrock", "lodheg", "catswen", "tebspant", "kinbidpeg", "mipgrit"],
          "trickWords": ["against", "knew", "know", "always", "often", "once"]
        },
        {
          "unit": 6,
          "skills": ["Vowel-consonant-e review", "Two-syllable words with closed + VCe syllables", "VCe exception and suffix -ive"],
          "decodableWords": ["reptile", "invite", "inside", "cupcake", "trombone", "stampede", "sunshine", "mistake", "costume", "pancake", "active", "captive", "festive", "massive", "give", "suppose", "recognize", "statement", "attitude", "extreme", "gives", "telephone", "online", "basement", "absolute", "supreme", "positive", "episode", "lifetime", "baseball", "include", "concrete", "negative", "envelope", "unlike", "makeup", "institute", "athlete", "impressive", "homeland", "divine", "investigate", "gratitude", "incomplete", "sensitive", "antidote", "satellite", "candidate", "volume", "obsolete", "relatives"],
          "nonsenseWords": ["pedshrame", "pogsive", "humgape", "sudhupe", "muptife", "buptive", "sabglile", "dadtive", "soprebe", "saptrite", "huntive", "dinblope", "zigblele", "banflefe", "fonclope", "higsene", "jubsive", "tidstife", "nodtive", "kibsnume", "nimtive", "bonsive", "nitbade", "ridtive"],
          "trickWords": ["only", "house", "move", "right", "place", "together"]
        },
        {
          "unit": 7,
          "skills": ["Open syllable type", "y as a vowel", "Combining open syllables with closed and VCe syllables", "More syllable division rules"],
          "decodableWords": ["go", "no", "so", "hi", "robot", "silent", "music", "hotel", "open", "tulip", "student", "pupil", "menu", "bacon", "zero", "tripod", "baby", "lady", "tiny", "pony", "shy", "cry", "fly", "sky", "spy", "dry", "fry", "going", "happy", "even", "probably", "hello", "crazy", "actually", "funny", "minute", "daddy", "moment", "lucky", "finally", "buddy", "quiet", "crying", "secret", "angry", "totally", "hungry", "using", "holy", "relax", "duty", "respect", "silly", "realize", "empty", "became", "mommy", "evil", "simply", "final", "plenty", "hero", "flying", "video", "possibly", "client", "truly", "local", "safety", "beyond", "candy", "trial", "penny", "lied", "twenty", "pretend", "nasty", "began", "mummy", "female", "navy"],
          "nonsenseWords": ["mimry", "nedky", "naven", "vopty", "demosh", "smislap", "drogrog", "plitug", "putry", "zobid", "shresmup", "snedreth", "dujosh", "shry", "fepmy", "prepog", "sposned", "grodram", "hadny", "bibluck", "glastosh", "bleflod", "legly", "retfy"],
          "trickWords": ["eight", "large", "change", "city", "every", "family", "night", "carry", "something"],
          "trickWordsNote": "Ninth word ('something') inferred: sources were truncated after 'carry'. Verify."
        },
        {
          "unit": 8,
          "skills": ["R-controlled syllable: ar, or"],
          "decodableWords": ["car", "star", "farm", "park", "shark", "start", "garden", "market", "sharp", "scarf", "corn", "fork", "born", "storm", "sport", "short", "north", "morning", "forget", "report", "hard", "lord", "part", "sort", "far", "forgive", "party", "forgot", "started", "normal", "darling", "support", "dark", "form", "army", "corner", "bar", "forest", "mark", "fortune", "smart", "horn", "card", "former", "starting", "uniform", "art", "reports", "arms", "sports", "arm", "normally", "starts", "reported", "stars", "inform", "cars", "port", "hardly", "forth", "pardon", "passport", "target"],
          "nonsenseWords": ["clorf", "grord", "brark", "shorm", "prort", "shrork", "sorch", "crorth", "barg", "shrarm", "porm", "smarsh", "glar", "slarb", "brord", "lort", "farch", "trort", "crar", "frorsh", "clarp", "storg", "grork", "glorg"],
          "trickWords": ["world", "answer", "different"]
        },
        {
          "unit": 9,
          "skills": ["R-controlled: er, ir, ur", "Dictionary skills"],
          "sampleWordsFromSchools": ["burst", "termite", "dirty"],
          "decodableWords": ["burst", "termite", "dirty", "fern", "term", "herd", "perch", "bird", "girl", "dirt", "shirt", "skirt", "stir", "fur", "burn", "turn", "hurt", "church", "curl", "sister", "winter", "perfect", "never", "sir", "hurry", "order", "partner", "better", "girls", "return", "orders", "partners", "ever", "third", "turned", "ordered", "farmers", "understand", "birth", "surprise", "border", "farther", "remember", "birds", "turns", "northern", "partnership", "person", "firm", "further", "disorder", "carpenter", "under", "thirty", "natural", "corners", "starters", "dinner", "thirsty", "survive", "ordering", "markers", "rather", "admiral", "hurts", "borders", "archers", "letter", "chirping"],
          "nonsenseWords": ["grirth", "jersh", "jirch", "swerth", "plerk", "therg", "slurn", "crerth", "wherb", "swurm", "thrursh", "drerb", "trerm", "shrerth", "dursh", "blirf", "frirm", "glern", "clirsh", "zerk", "plerp", "thur", "serm", "mern"],
          "trickWords": ["picture", "learn", "earth", "father", "brother", "mother"]
        },
        {
          "unit": 10,
          "skills": ["Double vowel (vowel team) syllable type", "ai, ay"],
          "sampleWordsFromSchools": ["paint", "display"],
          "decodableWords": ["paint", "display", "rain", "mail", "tail", "train", "snail", "chain", "wait", "brain", "play", "stay", "gray", "tray", "spray", "clay", "Sunday", "birthday", "raining", "okay", "waiting", "maybe", "pain", "pay", "paid", "playing", "raise", "yesterday", "faith", "staying", "main", "played", "training", "ray", "remain", "lay", "failed", "plays", "details", "paying", "painting", "pray", "waited", "stayed", "laid", "player", "remains", "holiday", "fail", "bay", "claim", "stays", "brains", "prayer", "detail", "pays", "saint", "payment", "maid", "halfway", "daily", "praying", "trained"],
          "nonsenseWords": ["gaich", "fraif", "shray", "raig", "thraig", "clain", "graig", "smay", "blait", "thray", "shraith", "smaip", "glay", "baint", "caif", "saig", "blay", "haich", "paip", "craith", "laich", "taich", "shraich", "braim"],
          "trickWords": ["great", "country", "away", "America", "school", "thought"]
        },
        {
          "unit": 11,
          "skills": ["ee, ea, ey"],
          "sampleWordsFromSchools": ["cheap", "keep", "chimney"],
          "decodableWords": ["cheap", "keep", "chimney", "tree", "feet", "sheep", "green", "sleep", "three", "street", "seat", "dream", "beach", "teach", "clean", "team", "peach", "key", "donkey", "valley", "turkey", "really", "need", "keys", "mainstream", "daydreaming", "mean", "feel", "alley", "daydream", "leave", "seen", "jersey", "daydreams", "real", "meet", "kidney", "eat", "week", "hockey", "easy", "free", "kidneys", "deal", "seems", "abbey", "means", "needs", "jockey", "least", "feeling", "smiley", "read", "seem", "volleyball", "speak", "meeting", "valleys", "reason", "sweet", "trolley", "beat", "coffee", "barley", "speaking", "weeks"],
          "nonsenseWords": ["shead", "gleant", "sleel", "treal", "stee", "preel", "jeaf", "jeeg", "skeal", "gree", "theash", "sneet", "threap", "gleach", "dree", "skeach", "shreach", "neam", "freath", "smeap", "pleast", "threen", "sleag", "fleep"],
          "trickWords": ["whose", "won", "son", "breakfast", "head", "ready"],
          "trickWordsNote": "One district lists 'too, school' in place of 'whose, won' (likely an older edition)."
        },
        {
          "unit": 12,
          "skills": ["oi, oy"],
          "decodableWords": ["oil", "coin", "boil", "join", "point", "soil", "spoil", "moist", "toilet", "toy", "boy", "joy", "enjoy", "oyster", "boys", "noise", "royal", "points", "enjoying", "poison", "enjoyed", "joined", "loyal", "disappointed", "loyalty", "joint", "employees", "joining", "toys", "poisoned", "employee", "coins", "employment", "pointed", "employed", "pointing", "employer", "disappoint", "employ", "spoiled", "convoy", "poisoning", "soy", "pointless", "royalty", "noisy", "unemployment", "void"],
          "nonsenseWords": ["zoip", "shroil", "throy", "toig", "bloim", "throim", "droy", "stoint", "thoy", "groy", "loist", "shoig", "zoy", "smoint", "moith", "smoik", "doif", "ploist", "choid", "snoil", "toich", "proit", "bloif", "shoik"],
          "trickWords": ["favorite", "early", "ocean"]
        },
        {
          "unit": 13,
          "skills": ["Review of suffix endings", "Likely: oa, oe, ow (long o)"],
          "skillsNote": "Vowel teams for Units 13-15 not confirmed per unit in sources found; groupings are a best guess.",
          "decodableWords": ["boat", "coat", "road", "soap", "goat", "toast", "float", "toe", "foe", "snow", "grow", "show", "slow", "blow", "window", "yellow", "rainbow", "follow", "throat", "toes", "railroad", "meatloaf", "payload", "speedboat", "throw", "groans", "doe", "raincoat", "steamboat", "low", "coach", "woe", "rainbows", "following", "groaning", "toenails", "sailboat", "showed", "load", "foes", "railroads", "fellow", "coast", "woes", "raincoats", "shows", "goal", "tiptoe", "followed", "loan", "toenail", "slowly", "loaded", "oboe"],
          "nonsenseWords": ["shoach", "shroad", "troan", "broant", "snoant", "droat", "spoant", "cloag", "troe", "smoath", "sloaf", "cloat", "sloam", "poash", "stoash", "moag", "froam", "spoam", "loant", "broat", "snoaf", "choal", "spoath", "troant"],
          "listNotes": ["Nonsense words leave out 'ow', because a made-up 'ow' word can be read two ways (snow / cow)."],
          "trickWords": ["Monday", "Tuesday", "cousin", "lose", "tomorrow", "beautiful"]
        },
        {
          "unit": 14,
          "skills": ["Likely: ou, ow (/ou/ as in cloud, cow)"],
          "decodableWords": ["cloud", "loud", "mouth", "shout", "round", "found", "ground", "count", "cow", "owl", "town", "clown", "crown", "brown", "growl", "without", "wow", "playground", "greenhouse", "eastbound", "outside", "power", "playhouse", "sounds", "however", "playgrounds", "sound", "crowd", "proud", "flowers", "south", "powerful", "shouting", "shower", "pounds", "powers", "county", "flower", "background", "tower", "counting", "downtown", "bound", "powder", "couch"],
          "nonsenseWords": ["jouk", "croush", "broud", "groush", "loul", "nount", "froup", "stoud", "doup", "spoup", "gouch", "droum", "noul", "droul", "prout", "noust", "roun", "drouch", "shoush", "thoul", "thoust", "soush", "frout", "throuf"],
          "listNotes": ["Nonsense words use only 'ou'; 'ow' is left out because a made-up 'ow' word can be read two ways."],
          "trickWords": ["Wednesday", "Thursday", "Saturday", "bought", "brought", "piece"]
        },
        {
          "unit": 15,
          "skills": ["Likely: oo (moon/book), ue, ew"],
          "decodableWords": ["moon", "spoon", "food", "room", "broom", "book", "cook", "foot", "wood", "blue", "glue", "clue", "true", "few", "grew", "chew", "flew", "threw", "took", "due", "crew", "seafood", "outlook", "showroom", "playbook", "boyhood", "soon", "issue", "blew", "teaspoon", "outgrew", "playroom", "cool", "value", "newspaper", "teaspoons", "fool", "rescue", "drew", "afternoon", "sue", "nephew", "choose", "issues", "newspapers", "books", "argue", "jewelry", "bathroom", "statue", "jewels", "understood", "avenue", "stew"],
          "nonsenseWords": ["groosh", "plue", "troont", "moop", "froost", "stooth", "noog", "thoon", "swew", "noont", "glooch", "thew", "doont", "troof", "ploont", "swue", "nooth", "smoop", "sloosh", "smoon", "croost", "choont", "froont", "clooth"],
          "listNotes": ["In nonsense words, 'oo' can be read either way (moon or book); both are correct."],
          "trickWords": ["January", "February", "July", "enough", "special", "December"]
        },
        {
          "unit": 16,
          "skills": ["au, aw"],
          "sampleWordsFromSchools": ["claw", "aunt"],
          "decodableWords": ["claw", "saw", "draw", "straw", "paw", "lawn", "yawn", "crawl", "hawk", "haul", "fault", "launch", "cause", "law", "outlaw", "chainsaw", "seesaw", "aunt", "awful", "outlaws", "laundry", "dawn", "outlawed", "vault", "laws", "haunted", "drawing", "auto", "raw", "automatic", "drawn", "launched", "awfully", "astronaut", "withdraw", "laurel", "crawling", "pause", "jaw"],
          "nonsenseWords": ["blauf", "shaunt", "nauf", "staw", "fraup", "traw", "taug", "traum", "chaut", "claul", "shaust", "staut", "gaum", "laum", "grauth", "craush", "haust", "flaun", "blauch", "chaush", "staush", "shraw", "spaust", "claust"],
          "trickWords": ["August", "laugh", "daughter"]
        },
        {
          "unit": 17,
          "skills": ["Consonant-le syllable type", "Review of all six syllable types"],
          "decodableWords": ["bubble", "apple", "candle", "puzzle", "table", "bugle", "maple", "purple", "simple", "jungle", "tumble", "handle", "sample", "giggle", "turtle", "needle", "uncle", "title", "cradle", "ripple", "pebble", "struggle", "able", "chuckles", "middle", "single", "battle", "bottle", "settle", "temple", "subtitles", "noble", "angle", "stable", "unable", "bottles", "muscle", "cable", "giggles", "eagle", "cattle", "humble", "samples", "tables", "candles", "muscles", "sniffles", "turtles", "chuckle", "apples", "gamble", "ankle", "shuttle", "bubbles", "battles", "noodles", "subtle", "saddle", "unstable", "jingle", "needles", "triangle", "marble", "tackle", "kettle", "pickle"],
          "nonsenseWords": ["daggle", "smickle", "twindle", "fremble", "steckle", "twuckle", "swintle", "famble", "bruggle", "clingle", "smockle", "flomble", "fripple", "frottle", "plantle", "mimble", "trackle", "jemble", "nindle", "stuckle", "drintle", "drample", "sluntle", "vemble"],
          "trickWords": ["trouble", "couple", "young"]
        }
      ]
    }
  ]
};
