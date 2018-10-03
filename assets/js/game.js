"use strict";
const gameData = {
    words: ["dark", "October", "pumpkin", "witch", "candy", "costume", "goblin", "frankenstein"],
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],
    score: 0,
    wins: 0,
    losses: 0,
}

//function that starts game and picks random word
function startGame(){
    let word = pickWord();
    gamePlay(word);
}

//function that starts game
function pickWord(){
    let chosenWord = gameData.words[Math.floor(Math.random() * gameData.words.length)];
    return chosenWord;
}

//function that governs game play
function gamePlay(word) {
    let wordLength = word.length;
    let guesses = Math.floor(wordLength / 2);
    alert(guesses);
}