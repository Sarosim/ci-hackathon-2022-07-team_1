document.addEventListener("DOMContentLoaded", () => {

let score = 0;
let iphone = document.getElementById("iphone");

/**
 * Positive emojis - increases score
 */

const positiveEmojis = [
    "assets/images/emojis/bigSmileEmoji1.png",
    "assets/images/emojis/blinkEmoji1.png",
    "assets/images/emojis/heart-eyesEmoji1.png",
    "assets/images/emojis/laughingEmoji0.5.png",
    "assets/images/emojis/star-eyeEmoji2.png"
]

/**
 * Negative emojis - decreases score
 */

const negativeEmojis = [
    "assets/images/emojis/poopEmoji1.png",
    "assets/images/emojis/sickEmoji1.png",
    "assets/images/emojis/devilEmoji1.png",
    "assets/images/emojis/freezeEmoji1.png",
    "assets/images/emojis/angryEmoji1.png",
]

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
 * Check the score and
 * update the high score if it's higher
 */

let finalScore = score;
let highScore = document.getElementById("high-score");

function increaseHighScore() {

    if (finalScore >= highScore) {
        let newHighScore = document.getElementById("high-score").innerText = finalScore;
    } 
}
})

let timer = document.getElementById("timer");

setTimeout (function() {
    timer.innerHTML;
}, 60000);

function lowScore() {
    if (finalScore <= 20) {
        message_p.innerHTML = `You got ${(finalScore)} 💩! Maybe you need more practice.`;
    }
}

function midScore() {
    if (finalScore >= 21 && finalScore <= 40) {
        message_p.innerHTML = `You got ${(finalScore)} 😃! Not bad you've got a feel for this.`;
    }
}

function topScore() {
    if (finalScore >= 60) {
        message_p.innerHTML = `You got ${(finalScore)} 🤩 and feeling good!`;
    }
}


