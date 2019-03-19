
playerTurn = "x";

var startButton = document.getElementById("start");
startButton.addEventListener("click", disableButton);
startButton.addEventListener("click", playGame);

function playGame() {
    if (playerTurn = "x") {
        document.getElementById("playerx").style.display = "initial";
    }
}

/*if (playerTurn = "x") {
    document.getElementById("playerx").style.display = "initial";
}*/

function disableButton() {
    this.disabled = true;
}