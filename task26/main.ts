//Choose a colr for an alien as you
//did in excercise 25, and writee an if-else chain
let alien_color : string = "green"
//If the alien’s color is green, print a statement 
//that the player just earned 5 points for shooting the alien.


if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}
else{
    console.log("the player just earned 10 points.")
}
alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}