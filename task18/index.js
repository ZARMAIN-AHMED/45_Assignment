"use strict";
let places = ['cape town', 'dehli', 'faisalabad', 'bankok', 'ahmedabad'];
console.log('original :' + places);
//print your array in alphabatic order without  modifying the actual list .
console.log('copy ' + [...places].sort());
//show that your array is still in its original order by printing it.
console.log('original :' + places);
//print your array in reserverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());
//reverse the order of your list . print the array to show that its order has change.
console.log('original :' + places.sort());
//Reverse the order of your list again . print the list to show it's back to its original order.
console.log('copy ' + [...places].sort().reverse());
