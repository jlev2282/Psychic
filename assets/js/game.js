"use strict";
const gameData = {
    gameStarted: false,
    words: ["dark", "October", "pumpkin", "witch", "candy", "costume", "goblin", "frankenstein"],
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],
    score: 0,
    wins: 0,
    losses: 0,
}

//function that starts game and picks random word
function startGame(){
    if (gameData.gameStarted === false) {
        let word = pickWord();
        gamePlay(word);
        gameData.gameStarted = true;  
    } else {
        return false;
    }
    
}

//function that starts game
function pickWord(){
    let chosenWord = gameData.words[Math.floor(Math.random() * gameData.words.length)];
    return chosenWord;
}

//function that governs game play
function gamePlay(word) {
    //get length of word
    let wordLength = word.length;
    //determine number of guesses user will have
    let guesses = Math.floor(wordLength / 2);

    //set the dashes to wordlength and store in unguessed word
    let word2Guess = [];
    for (var i = 0; i < wordLength; i++) {
        word2Guess.push("_");
    }
    //make a string with number of dashes in word
    let wordString = word2Guess.join(" ");

    //append string to 
    document.getElementById("word").innerHTML = wordString;
    document.getElementById("banner").innerHTML= "PICK A LETTER";
    document.getElementById("guesses").innerHTML = guesses + " guesses remain.";
}