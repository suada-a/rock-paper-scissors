
function computerPlayer() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    playerSelection = playerSelection.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim().toLowerCase();
    computerSelection = computerPlayer();
    const playerScoreboard = document.querySelector(".player-score");
    const computerScoreboard = document.querySelector(".computer-score");
    const result = document.querySelector(".result");
    playerScore = parseInt(playerScoreboard.textContent);
    computerScore = parseInt(computerScoreboard.textContent);
    console.log(playerSelection)
    console.log(computerSelection)

    if (playerScore + computerScore === 6) {
        endGame(playerScore, computerScore);
        playerOptions.forEach(option => {
            option.removeEventListener("click", function() {
                playRound(this.textContent, playerOptions); 
            })
        });
        return;
    }

    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerScore++;
            playerScoreboard.textContent = playerScore.toString();
            result.textContent = "You Win! Paper beats Rock";
        } else if (playerSelection === "scissors") {
            computerScore++;
            computerScoreboard.textContent = computerScore.toString();
            result.textContent = "You Lose! Rock beats Scissors";
        } else if (playerSelection === computerSelection) {
            result.textContent = "Tie";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerScore++;
            computerScoreboard.textContent = computerScore.toString();
            result.textContent = "You Lose! Paper beats Rock";
        } else if (playerSelection === "scissors") {
            playerScore++;
            playerScoreboard.textContent = playerScore;
            result.textContent = "You Win! Scissors beat Paper";
        } else if (playerSelection === computerSelection) {
            result.textContent = "Tie";
        } 
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerScore++;
            playerScoreboard.textContent = playerScore.toString();
            result.textContent = "You Win! Rock beats Scissors";
        } else if (playerSelection === "paper") {
            computerScore++;
            computerScoreboard.textContent = computerScore;
            result.textContent = "You Lose! Scissors beats Rock";
        } else if (playerSelection === computerSelection) {
            result.textContent = "Tie";
        }
    }
}

function endGame(playerScore, computerScore) {
    const result = document.querySelector(".result");

    if(playerScore > computerScore) {
        result.textContent = "You Win!";
    } else if (playerScore < computerScore) {
        result.textContent = "The computer beat you!";
    } else if (playerScore === computerScore){
        result.textContent = "It was a tie!";
    }
}

function game() {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    let playerOptions = [rockButton, paperButton, scissorsButton];
    playerOptions.forEach(option => {
        option.addEventListener("click", function() {
            playRound(this.textContent, playerOptions); 
        })
    });

}

game();