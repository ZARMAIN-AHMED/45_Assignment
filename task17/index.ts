//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.


let guest_list :string[] = ["ali" , "farhan" ,"raza", "ayesha"];
let not_present : string = "farhan";
let new_guest : string = "babar azam";
guest_list[1] = new_guest;
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
console.log('\nUnfortunately we can not arrange big table , only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited for dinner`)
}
for (let i=0; i<guest_list.length; i++){
    console.log('Requested Sir/Madam '  + guest_list[i] + ',\nYes you are still invited on tommorrow dinner\n Thank you\n')
}
guest_list.splice(0,2)
console.log(guest_list)