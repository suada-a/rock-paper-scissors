function computerPlayer(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

const choices = ["Rock", "Paper", "Scissors"];

console.log(computerPlayer(choices));