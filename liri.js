var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require ('fs');
var keys = require('./keys.js');
var keyWord = process.argv[2];

// run the following code whe movie-this is the keyword
if (keyWord==="movie-this") {
	// stores movie into movieTitle... When no movie selected default search is Mr. Nobody
	var movieTitle=process.argv[3] || "Mr+Nobody";
//	movieTitle.split(" ").join("+");
	var url ="http://www.omdbapi.com/?t="+movieTitle+"&y=&plot=short&r=json&tomatoes=true";
	console.log(url);
		request(url, function (error, response, body) {
  // if there were no errors and the response code was 200 (i.e. the request was successful)
  			if (!error && response.statusCode == 200) {
			  	var body =JSON.parse(body);
			    console.log("Title: "+body.Title);
			    console.log("Year: "+body.Year);
			    console.log("Rating: "+body.imdbRating);
			    console.log("Country: "+body.Country);
			    console.log("Language: "+body.Language);
			    console.log("Plot: "+body.Plot);
			    console.log("Actors: "+body.Actors);
			    console.log("Tomato Rating: "+body.tomatoRating);
			    console.log("Tomato URL: "+body.tomatoURL);
 			 }
		});
} 

//Twitter
if (keyWord === "my-tweets") {
	
	keys = keys.twitterKeys;
	// set parameters
	var params = {screen_name: 'JCUCFBOOTCAMP',
				  count: 20
				 };

	var client = new Twitter({
		consumer_key: keys.consumer_key,
		consumer_secret: keys.consumer_secret,
		access_token_key: keys.access_token_key,
		access_token_secret: keys.access_token_secret
	});

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error & response.statusCode === 200) {
  			for (var i = 0; i < tweets.length; i++) {
  				console.log(tweets[i].text);
  				console.log(tweets[i].created_at);
  			}
  		}
	});
}

//Spotify
if (keyWord === "spotify-this-song") {
	var songTitle=process.argv[3] || "spotify:The Sign";
 
	spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	} else{
			console.log("Artist(s): "+data.tracks.items[0].album.artists[0].name);
			
			console.log("Song Name: "+data.tracks.items[0].name);
			
			console.log("Link: "+data.tracks.items[0].artists[0].external_urls.spotify);
			
			console.log("Album: "+data.tracks.items[0].album.name);
    	} 
	});

}
/*
if (keyWord === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(error, data){
		if (err) {
			return console.log(err);
		}else{
			console.log(data);
		}
	});
}

*/







