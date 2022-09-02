
//Define constants, stores results from RPS game
let logic;
let outcomeMessage;
let playerSelection;
let compC;

//Event listener for button presses
const rock = document.querySelector("#rockbtn");
const paper = document.querySelector("#paperbtn");
const scissors = document.querySelector("#scissorsbtn");
rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);

//Updating html to display results
const results = document.createElement("div");
const compOpt = document.createElement("p");
const winner = document.createElement("p");
const place = document.querySelector(".container");


//Plays game given button press and outputs results
function playGame(e) {
    if (e.target.id === "rockbtn") {
        playerSelection = "Rock";
    } else if (e.target.id === "paperbtn") {
        playerSelection = "Paper";
    } else if (e.target.id === "scissorsbtn") {
        playerSelection = "Scissors";
    }
    const compC = getComputerChoice();

    playRound(playerSelection, compC);

    compOpt.textContent = "You chose " + playerSelection + ", and the computer chose " + compC; 
    winner.textContent = outcomeMessage;
    results.appendChild(compOpt);
    results.appendChild(winner);
    place.appendChild(results);
}


//Random computer choice return rock, paper, or scissors
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

/* Game Logic, stores result with logic and outcomeMessage variables */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        logic = 2;
        outcomeMessage = "It's a tie!";
    }   else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            logic = 1;
            outcomeMessage = "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            logic = 0;
            outcomeMessage = "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }   else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            logic = 1;
            outcomeMessage = "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            logic = 0;
            outcomeMessage = "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }   else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            logic = 1;
            outcomeMessage = "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            logic = 0;
            outcomeMessage = "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }
}


/* 5 rounds
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
*/


