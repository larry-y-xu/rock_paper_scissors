game();

function getComputerChoice() {
    integerChoice = Math.floor(Math.random() * 3) + 1;
    if (integerChoice === 1) {
        return "rock";
    }
    else if (integerChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("the result for the round is: tie");
        }
        else if (computerSelection === "paper") {
            console.log("the result for the round is: you lose");
        }
        else {
            console.log("the result for the round is: you win");
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("the result for the round is: you win");
        }
        else if (computerSelection === "paper") {
            console.log("the result for the round is: tie");
        }
        else {
            console.log("the result for the round is: you lose");
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("the result for the round is: you lose");
        }
        else if (computerSelection === "paper") {
            console.log("the result for the round is: you win");
        }
        else {
            console.log("the result for the round is: tie");
        }
    }
    else {
        console.log("the result for the round is: not a valid round");
    }
}

function game() {
    let computerChoice = getComputerChoice()
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorButton = document.getElementById("scissors");
    rockButton.addEventListener(("click"), () => {playRound("rock", computerChoice)})
    paperButton.addEventListener(("click"), () => {playRound("paper", computerChoice)})
    scissorButton.addEventListener(("click"), () => {playRound("scissors", computerChoice)})
}

