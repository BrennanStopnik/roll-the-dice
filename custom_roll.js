/*
Create a new file, custom-roll.js, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.
*/

const prompt = require("prompt-sync")({sigint: true});

let x = Number(prompt("How many sides would you like on you dice? "));

let num1 = Math.ceil(Math.random()*x);
let num2 = Math.ceil(Math.random()*x);

if (x <= 2){
    console.log("Seriously? Pick a bigger number.");
}else if (x >= 3 && x <= 49){
    if (num1 === num2){
        console.log("Your numbers are " + num1 + " and " + num2 + ". Also known as a Hard " + (num1*2)+ "!");
    }else{
        console.log("Your numbers are " + num1 + " and " + num2);
    }
}else if (x >= 50 && x <=99){
    if (num1 === num2){
        console.log("Your numbers are " + num1 + " and " + num2 + ". Also known as a Hard " + (num1*2) + "!");
    }else{
    console.log("A little big but that's cool. Your numbers are: " + num1 + " and " + num2);
    }
}else{
    console.log("Come on. Let's try something below 100.")
}
