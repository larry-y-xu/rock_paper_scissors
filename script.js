let choice = "ROCK";
console.log(playRound(choice, getComputerChoice()));

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
            return "Tie";
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
            return "Tie";
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
            return "Tie";
        }
    }
    else {
        return "not a valid round";
    }
}

