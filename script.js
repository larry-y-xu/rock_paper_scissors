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
            return "A tie";
        }
        else if (computerSelection === "paper") {
            return "You lose";
        }
        else {
            return "You win";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win";
        }
        else if (computerSelection === "paper") {
            return "A tie";
        }
        else {
            return "You lose";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose";
        }
        else if (computerSelection === "paper") {
            return "You win";
        }
        else {
            return "A tie";
        }
    }
    else {
        return "not a valid round";
    }
}

function game() {
    for (let i=1; i<6; i++) {
        playerInput = prompt("Enter your decision, either rock, paper, or scissors");
        result = playRound(playerInput, getComputerChoice());
        console.log("the result for round " + i + " is " + result);
    }
}

