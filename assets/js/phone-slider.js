document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    console.log(slider)
    let position = 0
    let isGoingRight = false
    let isGoingLeft = false
    speed = 25 // can determine speed of slider
    let leftTimerId
    let rightTimerId

    function slideRight() {
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval( function () {
            if (position <= 86) {
                position += 1
                slider.style.left = position + '%'
                console.log(slider.style.left)
            } else {
                clearInterval(rightTimerId)
                isGoingRight = false
            }
        }, speed)   
    }

    function slideLeft() {
        console.log("Left pressed");
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval( function () {
            if (position >= 1) {
            position -= 1
            slider.style.left = position + '%'
            } else {
                clearInterval(leftTimerId)
                isGoingLeft = false
            }
        }, speed)
    }


    // assign functions to keys
    function control(e) {
        if (e.keyCode === 39) { 
            slideRight() // for when we press right
        } else if (e.keyCode === 37) { 
            slideLeft() // for when we press left
        }
    }
    document.addEventListener('keydown', control)
})