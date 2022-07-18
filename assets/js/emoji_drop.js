document.addEventListener("DOMContentLoaded", () => {
    let scoreElement = document.getElementById("score");
    var mySecondInter
    const positionXArray = [18, 28, 42, 56, 70, 84,]

    const emojiArray = [ 
        "assets/images/emojis/angryEmoji1.png",
        "assets/images/emojis/bigSmileEmoji1.png",
        "assets/images/emojis/blinkEmoji1.png",
        "assets/images/emojis/devilEmoji1.png",
        "assets/images/emojis/freezeEmoji1.png",
        "assets/images/emojis/heart-eyesEmoji1.png",
        "assets/images/emojis/laughingEmoji0.5.png",
        "assets/images/emojis/poopEmoji1.png",
        "assets/images/emojis/sickEmoji1.png",
        "assets/images/emojis/star-eyeEmoji2.png"
    ]

    const goodEmoji = [ 
        "assets/images/emojis/bigSmileEmoji1.png",
        "assets/images/emojis/blinkEmoji1.png",
        "assets/images/emojis/heart-eyesEmoji1.png",
        "assets/images/emojis/laughingEmoji0.5.png",
        "assets/images/emojis/star-eyeEmoji2.png"
    ]

    // const badEmoji = [
    //     "assets/images/emojis/angryEmoji1.png",
    //     "assets/images/emojis/devilEmoji1.png",
    //     "assets/images/emojis/freezeEmoji1.png",
    //     "assets/images/emojis/poopEmoji1.png",
    //     "assets/images/emojis/sickEmoji1.png",
    // ]

    const numOfDrops = []

    // Function to create random emoji at random x index points
    let myFirstInter = setInterval(function () {
    let id = positionXArray[Math.floor(Math.random() * positionXArray.length) + 1];
    let gameScreen = document.getElementById("screen-size")
    let emPosLeft = id
    let emoji = document.createElement("img");
    emoji.className = "emoji";
    let emojiImg = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    emoji.setAttribute("src", emojiImg);
    let emojiID = numOfDrops.length + 1
    numOfDrops.push(emojiID)
    emoji.setAttribute("id", emojiID)
    emoji.style.left = emPosLeft + "%"
    let emPosY = emoji.style.top
    gameScreen.appendChild(emoji)

    // Gets sizes, x and y for working elements positions
     let phone = document.getElementById("iphone")

        /*Check to see if emoSets the point at which the 
        emoji is removed from the screen*/
            mySecondInter = setInterval(function() {
            let iphone = phone.getBoundingClientRect()
            let emPos = emoji.getBoundingClientRect()
            let emPosX = emPos.left + 25
            let emPosTop = emPos.top
            let phoneY = iphone.top

            if (emPosTop <= phoneY) {
                let newPosY = emPosY ++
                emoji.style.top = newPosY + "px"
            } else {git 
                if (iphone.left < emPosX && iphone.right > emPosX){
                    let foo = emoji.getAttribute('src')
                    if (goodEmoji.includes(foo)) {
                        changeScore(5)
                        emoji.remove()
                    } else {
                        changeScore(-5)
                        emoji.remove()
                    }
                } else {
                emoji.remove()
                }
            }
        }, 5) // Speed to be set to increase as user moves though the game
    }, 2000) // Speed to be set to increase as user moves though the game

    function changeScore(score) {
        let oldScore = parseInt(document.getElementById("score").innerText)
        let newScore = oldScore + score
        document.getElementById("score").innerText = newScore;

        let counter = parseInt(document.getElementById("timer").innerText)
        counter -= 1
        document.getElementById("timer").innerText = counter;

        gameOver()

        }
    function gameOver() {
        clearInterval(myFirstInter)
        clearInterval(mySecondInter)
        checkHighScore()
        alert("Game over")
    }

        function checkHighScore(gameScore) {
            let highScoreElement = document.getElementById("high-score");
            // Check if highScore is in Local Storage
            let highScoreStr = localStorage.getItem("highScore");
            if (highScoreStr === null) {
                // If not, save GS to LS
                localStorage.setItem('highScore', gameScore);
            } else {
                //If there is HS in LS 
                let highScore = parseInt(highScoreStr);
                // Compare LS High score with Game Score
                if (gameScore > highScore) {
                    // messageHighScoreModal.show()
                    localStorage.setItem('highScore', gameScore);
                    highScoreElement.textContent = gameScore;
                } else {
            
                }
            }
        }
})

