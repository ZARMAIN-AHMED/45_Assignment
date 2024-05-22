"use strict";
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt(); //default large and message
make_shirt("medium"); // Default message , medium size
make_shirt("small", "Dive into Coding"); //custom message , small size
