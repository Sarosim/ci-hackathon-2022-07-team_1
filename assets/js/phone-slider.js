document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider')
    let right = 0

    function slideRight() {
        right += 15
        slider.style.left = right + 'px'
        console.log(slider.style.left)
    }
    slideRight()

    function slideLeft() {
        right -= 15
        slider.style.left = right + 'px'
        console.log(slider.style.left)
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