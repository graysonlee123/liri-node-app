require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let userInput = process.argv.splice(0, 3);
userInput = process.argv.join(" ");

fs.appendFile(__dirname + "/log.txt", `\n${command} ${userInput}`, function(err) {
    if (err) return console.log(err);
});

switch (command) {
    case "concert-this":
        return concertThis(userInput);
    case "spotify-this-song":
        return spotifyThis(userInput);
    case "movie-this":
        return movieThis(userInput);
    case "do-what-it-says":
        return whatItSays();
    default:
        return console.log("Enter concert-this, spotify-this-song, movie-this, or do-what-it-says");
}

function concertThis(args) {
    if (!args) return console.log("Must enter a band to lookup! Example: node liri.js concert-this Tame Impala");
    console.log("Loading results...");
    const queryUrl = `http://rest.bandsintown.com/artists/${args}/events?app_id=codingbootcamp`;
    axios.get(queryUrl).then(function (data) {
        const shows = data.data;

        if (shows != "") {
            // If they have shows...
            shows.forEach((item, i) => {
                const venue = item.venue;
                console.log(`\n${i + 1}) Showing at ${venue.name || "(no venue name provided)"} \n Located in ${venue.city} ${venue.region || ""} (${venue.country}) \n at ${moment(item.datetime)}`);
            });
        } else {
            console.log("Nothing found, or that band isn't playing.");
        };
    });
};

function spotifyThis(args) {

    displaySpotifySong(args || "The Sign Ace of Base");
    
    function displaySpotifySong(songQuery) {
        spotify.search({ type: 'track', query: songQuery }, function (err, data) {
            if (err) return (err);
    
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
    };
};

function movieThis(args) {
    console.log("Loading movie search results...");

    displayMovie(args || 'Mr. Nobody');

    function displayMovie(movieQuery) {
        const queryUrl = `http://www.omdbapi.com/?apikey=trilogy&t=${movieQuery}`;

        axios.get(queryUrl).then(function(data) {
        data = data.data;

        console.log(`Movie title: "${data.Title}"`);
        console.log(`Release: "${data.Released}"`)
        console.log(`IMDB Rating: "${data.imdbRating}"`);
        console.log(`Rottom Tomatoes Rating: "${data.Ratings[1].Value}"`);
        console.log(`Country produced: "${data.Country}"`);
        console.log(`Movie language: "${data.Language}"`);
        console.log(`Movie plot: "${data.Plot}"`);
        console.log(`Actors: "${data.Actors}"`);
        });
    };
}

function whatItSays() {
    console.log("Do what it says! A random command is being entered...");
    fs.readFile(__dirname + "/random.txt", "utf8", function(err, data) {
        if (err) return console.log(err);
        const rndCmds = data.split(";");
        const chosenIdx = Math.floor(Math.random() * (rndCmds.length));
        const idxSplit = rndCmds[chosenIdx].split(",");
        const params = idxSplit[1].replace(/['"]+/g, '');;
        const cmd = idxSplit[0];

        console.log("Command: " + cmd + "    Paramaters: " + params);

        switch (cmd) {
            case "concert-this": return concertThis(params);
            case "spotify-this-song": return spotifyThis(params);
            case "movie-this": return movieThis(params);
        }
    });
}