const MOVES = ["ROCK", "PAPER", "SCISSORS"];
const MOVES_INDEX = {"ROCK" : 0, "PAPER" : 1, "SCISSORS" : 2};

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if ( ((playerSelection - 1) % 2) == computerSelection) {
        return "You Win!" + MOVES[playerSelection] + " beats " + MOVES[computerSelection];
    }
    else if ( ((computerSelection - 1) % 2) == playerSelection) {
        return "You Lose!" + MOVES[computerSelection] + "beats" + MOVES[playerSelection];
    }
    else {
        return "Draw!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = MOVES_INDEX[prompt("Choose your move").toUpperCase()];
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();