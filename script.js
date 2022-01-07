function computerPlayer() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    let computerSelection = computerPlayer();
    let playerSelection = prompt("Enter your selection: ");
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
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            return "You Win! Rock beats Scissors";
        } else if (playerSelection == "paper") {
            return "You Lose! Scissors beats Rock";
        } else {
            return "Tie";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const round = playRound();
        console.log(round);

        if(round.includes("Win")) {
            playerScore++;
        } else if(round.includes("Lose")) {
            computerScore++;
        }
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    if(playerScore > computerScore) {
        return "You beat the Computer!";
    } else if (playerScore < computerScore) {
        return "The computer beat you!"
    } else {
        return "It was a tie!";
    }
}

console.log(game());