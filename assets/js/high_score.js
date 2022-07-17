document.addEventListener('DOMContentLoaded', () => {
    let highScoreElement = document.getElementById("high-score");
    let timerElement = document.getElementById("timer");
    // Hard code for testing
    
    console.log
    function checkHighScore(gameScore) {
        // Check if highscore is in Local Storage
        let highScoreStr = localStorage.getItem("highScore");
        if (highScoreStr === null) {
            // If not, save GS to LS
            localStorage.setItem('highScore', gameScore);
        }
        else {
            //If there is HS in LS 
            let highScore = int(highScoreStr);
            // Compare LS High score with Game Score
            if (gameScore > highScore) {
                // messageHighScoreModal.show()
                localStorage.setItem('highScore', gameScore);
                highScoreElement.textContent = gameScore;
            }
            else {
                // messageNoHighScoreModal.show()
                timerElement.textContent = gameScore;
            }
        }
    }
})
