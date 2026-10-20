const intro = document.getElementById("intro-text");

const possible_text = [
    "yoyoyo it's",
    "welcome to",
    "the one and only",
    "probably",
    "polysystem,",
    "we're",
    "the gay lords of",
    "Fig 1."];


intro.innerText = possible_text[Math.trunc(possible_text.length * Math.random())];