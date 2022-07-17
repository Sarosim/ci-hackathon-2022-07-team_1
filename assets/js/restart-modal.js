const instructionsBtn = document.querySelector("#instructions-btn");
const restartModal = document.querySelector(".restart-modal");
const closeRestartBtn = document.querySelector("#close-restart");

function openRestart(){
    restartModal.style.display = "block";
}
function closeRestart(){
    restartModal.style.display = "none";
}
instructionsBtn.addEventListener("click", openRestart);
closeRestartBtn.addEventListener("click", closeRestart);