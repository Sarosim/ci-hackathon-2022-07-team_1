const instructionsBtn = document.querySelector("#instructions-btn");
const instructionsModal = document.querySelector(".instructions-modal");
const closeInstructionsBtn = document.querySelector("#close-instructions");

function openInstructions(){
    instructionsModal.style.display = "block";
}
function closeInstructions(){
    instructionsModal.style.display = "none";
}
instructionsBtn.addEventListener("click", openInstructions);
closeInstructionsBtn.addEventListener("click", closeRestart);

