document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    let position = 0

    function slideRight() {
        position += 15
        slider.style.left = position + 'px'
    }
    slideRight()

    function slideLeft() {
        position -= 15
        slider.style.left = position + 'px'
    }
    slideLeft()

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