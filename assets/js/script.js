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
 * Setting th timer
 */

const defaultValue = 2 * 60;
var countDownTime = defaultValue;
const findTimeString = () => {
    var minutes = String(Math.trunc(countDownTime / 60));
    var seconds = String(countDownTime % 60);
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }
    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }
    return minutes + seconds;
  };

/**
 * Setting the high score
 */

let highScore = document.getElementById("high-score");

function increaseHighScore() {

    if (timer === 0) {
        (score >= highScore)
        let newHighScore = document.getElementById("high-score").innerHTML = score;
    } 
}
})

/**
 * Reset button
 */

document.getElementById("reset").addEventListener("click", function() {
        loadGame () 
})

/**
 * Results messages
 */

function lowScore() {
    if (finalScore <= 20) {
        message.innerHTML = `You got ${(finalScore)} 💩! Maybe you need more practice.`;
        document.getElementById("message").style.display = 'block';
    }
}

function midScore() {
    if (finalScore >= 21 && finalScore <= 40) {
        message.innerHTML = `You got ${(finalScore)} 😃! Not bad you've got a feel for this.`;
        document.getElementById("message").style.display = 'block';
    }
}

function topScore() {
    if (finalScore >= 41) {
        message.innerHTML = `You got ${(finalScore)} 🤩 and feeling good!`;
        document.getElementById("message").style.display = 'block';
    }
}


