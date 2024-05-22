//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians_names : string[] = ['alice', 'david','chris'];

function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}

let copy_magician_names = magicians_names.slice();

let  copy_great_magicians = make_great(copy_magician_names);

console.log("original Array\n")

show_magician(magicians_names);

console.log("copy Array\n")
show_magician(copy_great_magicians);