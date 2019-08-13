# Liri / Node App

Using this CLI app, users will be able to search songs, concerts, and movies. 

## Usage

The app is structured based off of the user's input after ...

`node liri.js`

... by taking a command ( `spotify-this-song`, `concert-this`, `movie-this`, and `do-what-it-says`) and the argument, which can be a song name, movie, or band. It will return relevent data based on the command and arguments.

#### Example ####

`node liri.js spotify-this-song viva la vida` will give the user information about Viva la Vida.

_`do-what-it-says` does not require arguments._

## Getting Started

Download the repo. Add your own .env file with code like so for Spotify:

```
# Spotify API keys

SPOTIFY_ID=your_spotify_id
SPOTIFY_SECRET=your_spotify_secret
```

 ...and run the main javascript app using Node.js by issuing the commands listed in "Notes about the app". 

## Built With

* [Node Spotify API](https://www.npmjs.com/package/node-spotify-api) - Spotify API used
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP for client and Node
* [OMDB API](http://www.omdbapi.com) - Used to get movies and shows
* [Bands in Town](https://www.artists.bandsintown.com) - Used to get bands in town
* [Moment](https://www.npmjs.com/package/moment) - for formatting Dates and Time
* [DotEnv](https://www.npmjs.com/package/dotenv) - for loading environment variables

## Screenshots

<img src="https://github.com/graysonlee123/liri-node-app/blob/master/assets/images/app-screenshots/concert-this%20young%20the%20giant.PNG?raw=true" alt="drawing" width="450"/>
</br>
<img src="https://github.com/graysonlee123/liri-node-app/blob/master/assets/images/app-screenshots/movie-this%20iron%20man.PNG?raw=true" alt="drawing" width="600"/>
</br>
<img src="https://github.com/graysonlee123/liri-node-app/blob/master/assets/images/app-screenshots/spotify-this-song%20politik.PNG?raw=true" alt="drawing" width="475"/>

More screenshots in the `assets/images/app-screenshots` folder

## Authors

* **Grayson Gantek** - [graysonlee123](https://github.com/graysonlee123)
