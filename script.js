function computerPlayer() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return "You Win! Paper beats Rock";
        } else if (playerSelection == "scissors") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "Tie";
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            return "You Lose! Paper beats Rock";
        } else if (playerSelection == "scissors") {
            return "You Win! Scissors beat Paper";
        } else {
            return "Tie";
        } 
    } else if (computerSelection == "scissors" && playerSelection == "") {
        if (playerSelection == "rock") {
            return "You Win! Rock beats Scissors";
        } else if (playerSelection == "paper") {
            return "You Lose! Scissors beats Rock";
        } else {
            return "Tie";
        }
    }
}

const computerSelection = computerPlayer();
const playerSelection = prompt("Enter your selection: ");

console.log(playRound(playerSelection, computerSelection));