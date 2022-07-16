document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    let right = 0

    function slideRight() {
        right += 30
        slider.style.left = right + 'px'
    }
    slideRight()

    // assign functions to keys
    function control(e) {
        if (e.keyCode === 39) {
            slideRight()
        }
    }
    document.addEventListener('keydown', control)
})