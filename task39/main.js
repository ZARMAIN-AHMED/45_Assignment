"use strict";
function city_country(city, country) {
    return `"${city}, ${country}"`;
    console.log(`"${city}, ${country}"`);
}
city_country("karachi", "pakistan");
let mycities = city_country("karachi", "pakistan");
console.log(mycities);
console.log(city_country("dubai", "UAE"));
console.log(city_country("london", "united kingdom"));
console.log(city_country("riyaz", "saudi arabia"));
