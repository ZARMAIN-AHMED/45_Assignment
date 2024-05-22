// Modify your for loop to print a sentence using the name of the pizza instead 
// of printing just the name of the pizza. For each pizza you should have one line of output 
// containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program,
//  outside the for loop, that states how much you like pizza.
//   The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//    such as I really love pizza!


let myPizza = ['cheezepizza','pepperoni pizza', 'vegetarien pizza'];
for (let i =0; i < myPizza.length; i++){
    console.log(myPizza[i]);
    
}
for (let i = 0; i < myPizza.length;) {
    console.log(`I like to eat ${myPizza[i]}`);
}

console.log(`\n I really like eat pizza .pizza comes in a variety of flavors and tooping individuals customize it to their liking`)