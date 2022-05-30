/*
Create a new file, rigged-dice.js, which prompts the user first for a number of sides, then for a rigged number. The dice should roll the rigged number twice as frequently as the other numbers!
*/

const prompt = require("prompt-sync")({sigint: true});

let rigged = Number(prompt("Enter the number you would like to rig (between 1 and 6): "));

let roll = Math.ceil(Math.random()*8); //1-8

console.log("Actual roll is: " + roll);
if (roll === 7 || roll === 8){
    console.log("Your number is: " + rigged);
} else {
    console.log("Your number is: " + roll);
}