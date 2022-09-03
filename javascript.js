
//Define constants, stores results from RPS game
let logic;
let outcomeMessage;
let playerSelection;
let compC;
let playerscore = 0;
let computerscore = 0;
let reset;

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
const currentscore = document.createElement("p");
const finalwinner = document.createElement("p");
const place = document.querySelector(".container");


//Plays game given button press and outputs results
function playGame(e) {
    if (reset === 1) {
        results.removeChild(finalwinner);
        reset = 0;
    }

    if (e.target.id === "rockbtn") {
        playerSelection = "Rock";
    } else if (e.target.id === "paperbtn") {
        playerSelection = "Paper";
    } else if (e.target.id === "scissorsbtn") {
        playerSelection = "Scissors";
    }
    const compC = getComputerChoice();

    playRound(playerSelection, compC);
   
    if (logic == 0) {
        computerscore += 1;
    } else if (logic == 1) {
        playerscore += 1;
    }

    compOpt.textContent = "You chose " + playerSelection + ", and the computer chose " + compC; 
    winner.textContent = outcomeMessage;
    currentscore.textContent = "Player " + playerscore + " - " + computerscore + " Computer";
    results.appendChild(compOpt);
    results.appendChild(winner);
    results.appendChild(currentscore);

    if (playerscore + computerscore === 5) {
        if (playerscore > computerscore) {
            finalwinner.textContent = "YOU WIN THE GAME!";
        } else {
            finalwinner.textContent = "YOU LOST! TRY AGAIN!";
        }
        playerscore = 0;
        computerscore = 0;
        results.appendChild(finalwinner);
        reset = 1;
    }

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