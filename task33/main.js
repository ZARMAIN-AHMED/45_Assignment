"use strict";
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] == 1) {
        console.log(`${myNumbers[i]}st`);
    }
    else if (myNumbers[i] == 2) {
        console.log(`${myNumbers[i]}nd`);
    }
    else if (myNumbers[i] == 3) {
        console.log(`${myNumbers[i]}rd`);
    }
    else if (myNumbers[i] >= 4 && myNumbers[i] <= 10) {
        console.log(`${myNumbers[i]}th`);
    }
}
