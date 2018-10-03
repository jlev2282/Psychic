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
    for (var i = 0; i < wordLength; i++) {
        gameData.word2Guess.push("_");
    }
    //make a string with number of dashes in word
    gameData.wordString = gameData.word2Guess.join(" ");

    //append string to 
    document.getElementById("word").innerHTML = gameData.wordString;
    document.getElementById("banner").innerHTML= "PICK A LETTER";
    document.getElementById("guesses").innerHTML = `Guesses: ${gameData.guesses}`;
    document.getElementById("wins").innerHTML = "Wins: "+ gameData.wins;
    document.getElementById("losses").innerHTML = `Losses: ${gameData.losses}`;
}

document.onkeyup = function(e){
   if (gameData.gameStarted === true && gameData.guesses > 0) {
       let letter = String.fromCharCode(event.which).toLowerCase();
       if (gameData.letters.indexOf(letter) != -1) {
           passValidation(letter);
       } else {
           alert("Please choose a valid letter");
       }
    } else {
        return false;
    }
};

function passValidation(letter) {
    if (gameData.wordString.indexOf(letter) != -1) {
        for (var i = 0; i < gameData.word.length; i++) {
            if (letter == gameData.word[i]) {
                gameData.word2Guess[i] = letter;
            }
        }  
    } else {
        gameData.guesses -= 1;
        if (gameData.guesses > 0 ) {
            alert("I'm sorry, guess again");  
        } else {
            alert("YOU LOSE!");
            gameData.losses++;
            gameData.gameStarted = false; 
        }
        
    }
    
    gameData.wordString = gameData.word2Guess.join(" ");
    document.getElementById("word").innerHTML = gameData.wordString;
    document.getElementById("guesses").innerHTML = `Guesses: ${gameData.guesses}`;
}
