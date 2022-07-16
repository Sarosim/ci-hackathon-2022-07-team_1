document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    let position = 0
    let isGoingRight = false
    let isGoingLeft = false
    speed = 30 // can determine speed of slider
    let leftTimerId
    let rightTimerId

    function slideRight() {
        console.log(screen.width)
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval( function () {
            if (position <= 100) {
                position += 2
                slider.style.left = position + '%'
            } else {
                clearInterval(rightTimerId)
                isGoingRight = false
            }
        }, speed)   
    }

    function slideLeft() {
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval( function () {
            if (position >= 0) {
            position -= 2
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