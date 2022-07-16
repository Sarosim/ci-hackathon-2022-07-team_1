document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    let position = 0
    let isGoingRight = false
    let isGoingLeft = false
    speed = 20 // can determine speed of slider

    function slideRight() {
        isGoingRight = true
        let rightTimerID = setInterval( function () {
            position += 15
        slider.style.left = position + 'px'
        }, speed)
    }

    function slideLeft() {
        isGoingLeft = true
        let leftTimerID = setInterval( function () {
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