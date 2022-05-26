/*
Create a file called six-sided.js that uses the Math.random() to simulate a random dice roll which is then logged out to the user.

The challenge here is transforming the random decimal (between 0 and 0.99999999...) into a number that's either 1, 2, 3, 4, 5, or 6. To do this you'll need to do some multiplying and some Math.floor()ing (or Math.ceil()ing).
*/

let x = Math.ceil(Math.random()*6);
let y = Math.floor(Math.random()*6+1);

if (x === 1 && y === 1){
    console.log("Snake Eyes! You rolled: " + x + " and " + y);
}else if(x === 2 && y == 2){
    console.log("Hard 4: " + x + " and " + y);
}else if(x === 3 && y === 3){
    console.log("Hard 6: " + x + " and " + y);
}else if(x === 4 && y === 4){
    console.log("Hard 8: " + x + " and " + y);
}else if(x === 5 && y === 5){
    console.log("Hard 10: " + x + " and " + y);
}else if(x === 6 && y === 6){
    console.log("Boxcars: " + x + " and " + y);
}else{
    console.log("You rolled: " + x + " and " + y);
}












