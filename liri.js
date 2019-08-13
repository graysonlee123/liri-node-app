require("dotenv").config();
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let userInput = process.argv.splice(0, 3);
userInput = process.argv.join(" ");

switch (command) {
    case "concert-this":
        return concertThis(userInput);
    case "spotify-this-song":
        return spotifySearch(userInput);
    case "movie-this":
        return console.log("Movie");
    case "do-what-it-says":
        return console.log("Do what it says!");
    default:
        return console.log("Enter concert-this, spotify-this-song, movie-this, or do-what-it-says");
}

function concertThis(args) {
    console.log("Loading results...");
    let queryUrl = `http://rest.bandsintown.com/artists/${args}/events?app_id=codingbootcamp`
    axios.get(queryUrl).then(function (data) {
        if (data.data != "") {
            console.log(data.data);
        } else {
            console.log("Nothing found, or that band isn't playing.");
        };
    });
};

function spotifySearch(args) {
    spotify.search({ type: 'track', query: args }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        const obj = data.tracks.items[0];
        const artists = obj.artists;
        const trackName = obj.name;
        const songPreview = obj.preview_url;
        const songAlbum = obj.album.name;

        //Artists
        artists.forEach(item => {
            console.log("Written by: " + item.name);
        })
        //Song name
        console.log("Track name: " + trackName);
        //Link to spotify preview
        console.log("Link to song preview: " + songPreview);
        //Album name
        console.log("From the album: " + songAlbum);
    });
}