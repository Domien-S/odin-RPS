// script.js

// 1) The user is welcomed and given the basic rules of the game. The user sees the three options and a points counter.
//console.log(`
//Welcome to this exciting game of rock, paper, scissors!
//The first one to get five points winns!
//Rock beats scissors
//Scissors beats paper
//Paper beats rock!
//Good luck and have fun!`)
// 2) The user selects a move.

// let playerSelection = prompt("Pick Rock, Paper or Scissor",) 

// 3) The computer selects a random move.
// function getComputerChoice (options) {
//    return arr[Math.floor(Math.random()* arr.length)];
// }

// 4) The system checks who wins and gets a point.
// 5) The point counter is adjusted.
// 6) The system checks if someone has 5 points.
// 7) If someone has 5 points victory is declared.

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie";
    } else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ) { return'Player'}
    else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection,computerSelection);
if(result === "Tie") {
    return "It's a tie!"
} else if (result === "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`
} else if(result === "Computer") {
    return `You loose! ${computerSelection} beats ${playerSelection}`
}
}
function getPLayerChoice(){
    let validatedInput = false;
    while( validatedInput === false) {
        const choice = prompt('rock, paper or scissors');
        if(choice === null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log(`
Welcome to this exciting game of rock, paper, scissors!
The first one to get five points winns!
Rock beats scissors
Scissors beats paper
Paper beats rock!
Good luck and have fun!`)
    for(let i =0; i <5; i++){
        const playerSelection = getPLayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--Next round--");
        if(checkWinner(playerSelection, computerSelection) === "Player") {
            scorePlayer++;
        } else if(checkWinner(playerSelection,computerSelection) === "Computer") {
            scoreComputer ++;
        }
    }
    console.log(`Game over`);
    if(scorePlayer > scoreComputer) {
        console.log(`Player has won with ${scorePlayer} points vs ${scoreComputer} points`);
    } else if(scorePlayer < scoreComputer) {
        console.log(`Computer has won with ${scoreComputer} points vs ${scorePlayer} points`); 
    } else {
        console.log("Its a tie! How can this be!");
        }
}

game()