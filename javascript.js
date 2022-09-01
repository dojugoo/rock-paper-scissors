

//Random computer choice return rock, paper, or scissors
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

/* Game Logic, return 0 for Loss, 1 for Win, 2 for Tie */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 2;
    }   else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return 1;
        } else {
            return 0;
        }
    }   else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 1;
        } else {
            return 0;
        }
    }   else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return 1;
        } else {
            return 0;
        }
    }
}

//Returns win/lose/tie message from game outcome
function getOutcome(playerSelection, computerSelection) {
    const log = playRound(playerSelection, computerSelection);
    if (log === 0) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (log === 1) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "It's a tie!";
    }

}

//Working game with 5 rounds and prints out score at end
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choice");
        let computerSelection = getComputerChoice();
        let play = playRound(playerSelection, computerSelection);
        if (play === 0) {
            computerScore += 1;
            console.log(getOutcome(playerSelection, computerSelection));
        } else if (play === 1) {
            playerScore += 1;
            console.log(getOutcome(playerSelection, computerSelection));
        } else {
            console.log(getOutcome(playerSelection, computerSelection));
        }
    }
    console.log("Your score is " + playerScore);
    console.log("Computer's score is " + computerScore);
}



console.log(game());


