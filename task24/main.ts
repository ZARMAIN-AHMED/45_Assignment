let cars : string = 'subaru' 
let age : number = 25
let numbers: number [] = [1,2,3,4]



// conditional test 1 equlity comparision


console.log("Is car == 'subaru'? it's predict True .")
console.log(cars == 'subaru');//true

//conditional test 2 strict equality comparison

console.log("Is car === 'subaru'? it's predict True .")
console.log(cars === 'subaru');//true





// test 3: inequlity comparison

console.log("Is car != 'toyota'? it's predict True .")
console.log(cars != 'toyota'); // false

//test 4: strict inequlity comparison (false)

console.log("Is car !== 'subaru'? it's predict True .")
console.log(cars !== 'subaru')// false


//lower case function
//test 5 : lower case coversion

console.log("Is car.toLowerCse( == 'subaru'? I predict True.")
console.log(cars.toLowerCase() == 'subaru');//true (converted to lowercase)

//test 6: lowercase conversion(false)
console.log("Is car.toLowerCse( === 'subaru'? I predict True.")
console.log(cars.toLowerCase() === 'subaru');//true (converted to lowercase)



//test 7 : equlity (true)

console.log("Is age == 25 ? it's predict True .")
console.log(age == 25);//true

//test 8 : inequlity (false)

console.log("Is age != 30? it's predict True .")
console.log(age != 30);//true

// //test 9: greater than comparision (false)

console.log("Is age > '30? it's predict True .")
 console.log(age > 30)// lexicographic comparision

// //test 10 : less than equal comparison(true)

 console.log("Is age <= 25? it's predict True .")
 console.log(age <= 25)// true

// logical operator 

//test 11 : and operator (true)
console.log ("is age > 20 && 30? i predict  true.")
console.log(age > 20 && age < 30);


//test 12 : or (false)

console.log("is age > 30 || age < 18 ?  i predict false")
console.log(age > 30 || age < 18 );


//test 13 : in array (true)

console.log("is 3 in number ? i perdict true")
console.log(3 in numbers);

//test 14 : not in array (false)
console.log("is 5 not in number ? i perdict true")
console.log(5  in numbers);
