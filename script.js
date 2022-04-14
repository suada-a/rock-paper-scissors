
function computerPlayer() {
    const choices = ["rock", "paper", "scissors"];
    // Get random selection for the computer player
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, playerOptions) {
    playerSelection = playerSelection.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim().toLowerCase();
    computerSelection = computerPlayer();
    const playerScoreboard = document.querySelector(".player-score");
    const computerScoreboard = document.querySelector(".computer-score");
    const result = document.querySelector(".result");
    playerScore = parseInt(playerScoreboard.textContent);
    computerScore = parseInt(computerScoreboard.textContent);
    let rounds = 0

    if (rounds < 3) {
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
        rounds++
    }

    if (playerScore + computerScore === 3) {
        endGame(playerScore, computerScore, playerOptions);
    }

}

function endGame(playerScore, computerScore, playerOptions) {
    const result = document.querySelector(".result");
    const restartBtn = document.querySelector('.new-game');

    playerOptions.forEach(option => {
        option.removeEventListener("click", function() {
            playRound(this.textContent, playerOptions); 
        })
        option.style.display = 'none';
    });

    if(playerScore > computerScore) {
        result.textContent = "You win!";
    } else {
        result.textContent = "The computer beat you!";
    }

    restartBtn.innerText = 'New Game';
    restartBtn.style.display = 'inline-block';
    restartBtn.style.fontSize = "30px";
    restartBtn.style.width = '10%';
    restartBtn.style.padding = '5px 0 5px 0';
    restartBtn.style.marginTop = '12px';
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    })

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