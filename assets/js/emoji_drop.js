document.addEventListener("DOMContentLoaded", () => {
    let scoreElement = document.getElementById("score");
    const positionXArray = [14, 28, 42, 56, 70, 84,]

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

    const numOfDrops = []

    // Function to create random emoji at random x index points
    setInterval(function () {
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
    let wrapperHeight = gameScreen.clientHeight
    let emojiHeight = emoji.clientHeight + 50
    let phone = document.getElementById("iphone")
    let iphone = phone.getBoundingClientRect()

        /*Check to see if emoSets the point at which the emoji is removed from the screen 
        */
        setInterval(function() {
            let emPosX = emoji.style.left

            if (emPosY <= wrapperHeight - emojiHeight) {
                let newPosY = emPosY ++
                emoji.style.top = newPosY + "px"
                if (iphone.left == emPosX && iphone.top == emPosY){
                    console.log("We have contact")
                    emoji.remove()
                }
            } else {
                emoji.remove()
            }
        }, 10) // Speed to be set to increase as user moves though the game
    }, 2000) // Speed to be set to increase as user moves though the game
})