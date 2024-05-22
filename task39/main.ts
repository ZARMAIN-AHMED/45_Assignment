// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



function city_country (city: string, country : string){
    return `"${city}, ${country}"`
    console.log(`"${city}, ${country}"`)
}

city_country("karachi", "pakistan");
let mycities = city_country("karachi", "pakistan");
console.log(mycities);

console.log(city_country("dubai", "UAE"));
console.log(city_country("london", "united kingdom"))
console.log(city_country("riyaz", "saudi arabia"));
