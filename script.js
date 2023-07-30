// script.js
let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice (options) {
    return arr[Math.floor(Math.random()* arr.length)];
}
console.log(getComputerChoice())