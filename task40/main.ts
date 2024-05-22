// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums.
//  Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//   If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function myAlbum(artistname: string, albumtitle: string){
    return {artistname, albumtitle}
}

let album1 = myAlbum("Ali" , "rang-e-mohabat");
let album2 = myAlbum("Madad" , "roshan andhera")
let album3 = myAlbum("Ayaz", "mausam-e-dil");


console.log(album1);
console.log(album2)
console.log(album3);


//NUMBER OF TRACK

function myAlbum2(artistname: string, albumtitle: string, numberOofTracks?: number){
    return{artistname, albumtitle, numberOofTracks}
}

let album4 = myAlbum2 ("Ali" , "dil hai", 30);
let album5 = myAlbum2("Madad" , "ajeeb kahani" , 55);
let album6 = myAlbum2("Babar", "typescript ki coding" , 65);

console.log(album4);
console.log(album5);
console.log(album6);
