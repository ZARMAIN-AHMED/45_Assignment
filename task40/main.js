"use strict";
function myAlbum(artistname, albumtitle) {
    return { artistname, albumtitle };
}
let album1 = myAlbum("Ali", "rang-e-mohabat");
let album2 = myAlbum("Madad", "roshan andhera");
let album3 = myAlbum("Ayaz", "mausam-e-dil");
console.log(album1);
console.log(album2);
console.log(album3);
//NUMBER OF TRACK
function myAlbum2(artistname, albumtitle, numberOofTracks) {
    return { artistname, albumtitle, numberOofTracks };
}
let album4 = myAlbum2("Ali", "dil hai", 30);
let album5 = myAlbum2("Madad", "ajeeb kahani", 55);
let album6 = myAlbum2("Babar", "typescript ki coding", 65);
console.log(album4);
console.log(album5);
console.log(album6);
