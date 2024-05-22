"use strict";
let guest_list = ["ali", "farhan", "raza", "ayesha"];
let not_present = "farhan";
let new_guest = "babar azam";
guest_list[1] = new_guest;
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
console.log('\nUnfortunately we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited for dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Requested Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tommorrow dinner\n Thank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
