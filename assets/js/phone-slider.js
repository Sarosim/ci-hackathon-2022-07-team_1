document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    let position = 0
    let isGoingRight = false
    let isGoingLeft = false
    speed = 50 // can determine speed of slider
    let leftTimerId
    let rightTimerId

    function slideRight() {
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval( function () {
            position += 15
        slider.style.left = position + 'px'
        }, speed)
    }

    function slideLeft() {
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval( function () {
            position -= 15
        slider.style.left = position + 'px'
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