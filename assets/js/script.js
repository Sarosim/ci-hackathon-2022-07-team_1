/**
 * Player score - to increase and decrease
 * depending on the emojis that land on the phone
 */

let score = 0;

/**
 * Positive emojis - increases score
 */

const emoji1 = document.getElementById("emoji1");
const emoji2 = document.getElementById("emoji2");
const emoji3 = document.getElementById("emoji3");
const emoji4 = document.getElementById("emoji4");
const emoji5 = document.getElementById("emoji5");

/**
 * Negative emojis - decreases score
 */

const emoji6 = document.getElementById("emoji6");
const emoji7 = document.getElementById("emoji7");
const emoji8 = document.getElementById("emoji8");
const emoji9 = document.getElementById("emoji9");
const emoji10 = document.getElementById("emoji10");

/**
 * Function to check which emojis 
 * positively or negatively impact the score
 */

function checkEmoji() {

    let positiveEmoji = (emoji1, emoji2, emoji3, emoji4, emoji5);
    let negativeEmoji = (emoji6, emoji7, emoji8, emoji9, emoji10);

    if (positiveEmoji) {
        increaseScore();
    } else {
        decreaseScore();
    }
}

/**
 * Gets the current score and increases it by 1
 */

function increaseScore() {

    let oldScore = document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current score and decreases it by 1
 */

function decreaseScore() {

    let oldScore = document.getElementById("score").innerText = --oldScore;

}

/**
 * Event listener for the phone 
 * catching the emojis
 */

document.getElementById("phone").addEventListener(""), function checkEmoji() {
    
}

/**
 * Check the final score and
 * update the high score if higher
 */

let finalScore = document.getElementById("finalScore");
let highScore = document.getElementById("highScore");

function finalScore() {

    if (finalScore >= highScore) {

        let newHighScore = document.getElementById("highScore").innerText = ++highScore;

    } else {

        let highScore = highScore; 
    }
    
}
