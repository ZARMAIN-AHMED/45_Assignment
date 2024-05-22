"use strict";
function make_sandwich(...items) {
    console.log("\n making a sandwich with the following itms : \n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\n Now enjoy sandwich");
}
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "butter", "lettuce", "egg", "tomato", "potato");
