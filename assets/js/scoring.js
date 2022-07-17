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
 * Function to check which emojis 
 * positively or negatively impact the score
 */

// setInterval(function() {

//     if (positiveEmojis) emPosX + emPosY === iphone emPosX {
//         increaseScore(), emoji.remove();
// //     } else (negativeEmojis) {
// //         decreaseScore(), emoji.remove();
//     }, 10
//     })

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
 * Check the final score and
 * update the high score if higher
 */

let finalScore = document.getElementById("finalScore");
let highScore = document.getElementById("high-score");

function finalScore() {

    if (finalScore >= highScore) {

        let newHighScore = document.getElementById("high-score").innerText = ++highScore;

    } else {

        let highScore = highScore; 
    }
    
}
