document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.phone-slider');
    let position = 50;
    let stepSize = 0.5;
    slider.style.left = position + '%';
    let isGoingRight = false;
    let isGoingLeft = false;
    // let speed = 35 // can determine speed of slider removed because of requestAnimationFrame
    let leftTimerId;
    let rightTimerId;

    function slideRight() {
        if (isGoingLeft) {
            isGoingLeft = false;
        }
        
        if (position <= 84) {
            isGoingRight = true; 
            position += stepSize;
            slider.style.left = position + '%';
        } else {
            isGoingRight = false;
            window.cancelAnimationFrame(rightTimerId);
        }
        rightTimerId = window.requestAnimationFrame(slideRight);
    }

    function slideLeft() {
        if (isGoingRight) {
            isGoingRight = false;
        }
        isGoingLeft = true;
        if (position >= 1) {
            position -= stepSize;
            slider.style.left = position + '%';
        } else {
            window.cancelAnimationFrame(leftTimerId);
            isGoingLeft = false;
        }
        leftTimerId = window.requestAnimationFrame(slideLeft);
    }

    // assign functions to keys
    function control(e) {
        if (e.keyCode === 39) { 
            window.cancelAnimationFrame(leftTimerId);
            slideRight(); // for when we press right
        } else if (e.keyCode === 37) { 
            window.cancelAnimationFrame(rightTimerId);
            slideLeft(); // for when we press left
        }
    }
    document.addEventListener('keydown', control);
})