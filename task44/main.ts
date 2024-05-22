//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
///The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function  make_sandwich (...items: string[]){
    console.log("\n making a sandwich with the following itms : \n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\n Now enjoy sandwich");

}

make_sandwich("chicken", "cheese", "mayo", "egg");

make_sandwich("bread", "butter");

make_sandwich("bread","butter" ,"lettuce", "egg" ,"tomato","potato");