var startButton = document.getElementById("start");
startButton.addEventListener("click", disableButton);

function disableButton() {
    this.disabled = true;
}