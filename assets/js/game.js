"use strict";
const gameData = {
    words: ["dark", "October", "pumpkin", "witch", "candy", "costume", "goblin", "frankenstein"]
}

function startGame(){
    let word = pickWord();
    alert("The random word is "+ word);
}

function pickWord(){
    let chosenWord = gameData.words[Math.floor(Math.random() * (gameData.words.length))+1];
    return chosenWord;
}