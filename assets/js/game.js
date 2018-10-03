"use strict";
const gameData = {
    gameStarted: false,
    words: ["dark", "October", "pumpkin", "witch", "candy", "costume", "goblin", "frankenstein"],
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],
    wins: 0,
    losses: 0,
    word: "",
    wordString: "",
    word2Guess: [],
}

//function that starts game and picks random word
function startGame(){
    if (gameData.gameStarted === false) {
        let word = pickWord();
        gameData.word = word;
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
    gameData.guesses = Math.floor(wordLength / 2);

    //set the dashes to wordlength and store in unguessed word
    for (var i = 0; i < gameData.wordLength; i++) {
        gameData.word2Guess.push("_");
    }
    //make a string with number of dashes in word
    gameData.wordString = word2Guess.join(" ");

    //append string to 
    document.getElementById("word").innerHTML = gameData.wordString;
    document.getElementById("banner").innerHTML= "PICK A LETTER";
    document.getElementById("guesses").innerHTML = `Guesses: ${gameData.guesses}`;
    document.getElementById("wins").innerHTML = "Wins: "+ gameData.wins;
    document.getElementById("losses").innerHTML = `Losses: ${gameData.losses}`;
}

document.onkeyup = function(e){
   if (gameData.gameStarted === true) {
       let letter = String.fromCharCode(event.which).toLowerCase();
       if (gameData.letters.indexOf(letter) != -1) {
           alert("you picked "+letter);
       } else {
           alert("Please choose a valid letter");
       }
    } else {
        return false;
    }
};
