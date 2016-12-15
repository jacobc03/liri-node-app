var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require ('fs');
var keys = require('./keys.js');
var keyWord = process.argv[2];

// run the following code whe movie-this is the keyword
if (keyWord==="movie-this") {
	// stores movie into movieTitle... When no movie selected default search is Mr. Nobody
	var movieTitle=process.argv[3] || "Mr. Nobody";
	movieTitle.split(" ").join("+");
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
				  count: 10
				 };

	var client = new Twitter({
		consumer_key: keys.consumer_key,
		consumer_secret: keys.consumer_secret,
		access_token_key: keys.access_token_key,
		access_token_secret: keys.access_token_secret
	});

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error & response.statusCode === 200) {
    		console.log(tweets);
    		//console.log(text);
    		//console.log(created_at);
  		}
	});
}

//Spotify
if (keyWord === "spotify-this-song") {
	var songTitle=process.argv[3] || "The Sign";
	songTitle.split(" ").join("+");
 
	spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	} else{
    		
			//Artist(s)
			//The song's name
			//A preview link of the song from Spotify
			//The album that the song is from
    	} 
	});

}


fs.readFile("random.txt", "utf8", function(error, data){
	



});










