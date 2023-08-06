// script.js

// 1) The user is welcomed and given the basic rules of the game. The user sees the three options and a points counter.
console.log(`
Welcome to this exciting game of rock, paper, scissors!
The first one to get five points winns!
Rock beats scissors
Scissors beats paper
Paper beats rock!
Good luck and have fun!`)
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

let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice (options) {
    return arr[Math.floor(Math.random()* arr.length)];
}

let playerscore = 0;
let computerscore = 0;
    let computerPick = getComputerChoice;
    let playerPick= prompt("Pick Rock, Paper or Scissor",);

function playRound (playerSelection, computerSelection) {
    let computerPick = getComputerChoice;
    let playerPick= prompt("Pick Rock, Paper or Scissor",);
    console.log(computerPick, playerPick);
    return computerPick, playerPick;
} if (computerPick === playerPick) {
    console.log('Draw! No winners this round!');
} else if (computerPick === 'Rock' && playerPick === 'Scissors') {
    let computerscore = computerscore =+1;
    console.log(`Rock beat Scissors! The computer get a point! The score is now ${computerscore} for the computer for ${playerscore} for the human`);
} else if (computerPick === 'Paper' && playerPick === 'Rock') {
    let computerscore = computerscore =+1;
    console.log(`Paper beat Rock! The computer get a point! The score is now ${computerscore} for the computer for ${playerscore} for the human`);
} else if (computerPick === 'Scissors' && playerPick === 'Paper') {
    let computerscore = computerscore =+1;
    console.log(`Scissors beat paper! The computer get a point! The score is now ${computerscore} for the computer for ${playerscore} for the human`);
}