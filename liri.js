require("dotenv").config();
var keys = require("./keys.js");

let command = process.argv[2];
let userInput = process.argv.splice(0, 3);
userInput = process.argv.join(" ");

switch (command) {
    case "concert-this":
        return console.log("Conerty!");
    case "spotify-this-song":
        return console.log("Sporify");
    case "movie-this": 
        return console.log("Movie");
    case "do-what-it-says": 
        return console.log("Do what it says!");
    default: 
        return console.log("Enter concert-this, spotify-this-song, movie-this, or do-what-it-says");
}