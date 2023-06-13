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
            output.textContent = "the result for the round is: tie\n";
        }
        else if (computerSelection === "paper") {
            output.textContent = "the result for the round is: you lose\n";
        }
        else {
            output.textContent = "the result for the round is: you win\n";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            output.textContent = "the result for the round is: you win\n";
        }
        else if (computerSelection === "paper") {
            output.textContent = "the result for the round is: tie\n";
        }
        else {
            output.textContent = "the result for the round is: you lose\n";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            output.textContent = "the result for the round is: you lose\n";
        }
        else if (computerSelection === "paper") {
            output.textContent = "the result for the round is: you win\n";
        }
        else {
            output.textContent = "the result for the round is: tie\n";
        }
    }
    else {
        output.textContent = "the result for the round is: not a valid round\n";
    }
}

function game() {
    let computerChoice = getComputerChoice()
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorButton = document.getElementById("scissors");
    const output = document.getElementById("output");
    rockButton.addEventListener(("click"), () => {playRound("rock", computerChoice)})
    paperButton.addEventListener(("click"), () => {playRound("paper", computerChoice)})
    scissorButton.addEventListener(("click"), () => {playRound("scissors", computerChoice)})
}

