var request = require('request');
var keys = require('./keys.js');
var keyWord = process.argv[2];


if (keyWord==="movie-this") {
	var movieTitle=process.argv[3] || "Mr. Nobody";
	movieTitle.split("").join("+");
	var url ="http://www.omdbapi.com/?t="+movieTitle+"&y=&plot=short&r=json&tomatoes=true";
		request(url, function (error, response, body) {
  // if there were no errors and the response code was 200 (i.e. the request was successful)
  			if (!error && response.statusCode == 200) {
			  	var body =JSON.parse(body);
			    console.log(body.Title);
			    console.log(body.Year);
			    console.log(body.imdbRating);
			    console.log(body.Country);
			    console.log(body.Language);
			    console.log(body.Plot);
			    console.log(body.Actors);
			    console.log(body.tomatoRating);
			    console.log(body.tomatoURL);
 			 }
		});
} 

