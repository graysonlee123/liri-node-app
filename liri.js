require("dotenv").config();
const axios = require("axios");
var keys = require("./keys.js");

let command = process.argv[2];
let userInput = process.argv.splice(0, 3);
userInput = process.argv.join(" ");

switch (command) {
    case "concert-this":
        concertThis(userInput);
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

function concertThis (args) {
    let queryUrl = `http://rest.bandsintown.com/artists/${args}/?app_id=codingbootcamp`
    axios.get(queryUrl).then(function(data) {
        console.log(data);
    })
}