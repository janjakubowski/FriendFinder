// ===============================================================================
// This data source holds an array of objects {friend's name, avatar and scores}

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

	// API GET Requests

	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});


	// API POST Requests

	app.post("/api/friends", function(req, res) {
			
			var user = req.body;
			// var name = user.name;
			var scoresString = user.scores;

			// convert scores to array of integers to do math
			var scores = scoresString.map(function(score) {
				return parseInt(score);
			});
			

			newFriend = {
				name: user.name,
				avatar: user.avatar,
				scores: scores
			};

			var totalScore = function(scores){
					return scores.reduce(function(a,b) {
					return a + b
					}, 0);
			}

			// default best match to first one in friendsDB
			var bestMatchIndex = 0;
			var bestMatchDifference = 40;       // diff of 10 - 5's and 10 - 1's is 40

			for(var i = 0; i < friends.length; i++) {

				nextScores = friends[i].scores;
				
				var nextTotalScore = function(nextScores){
					return nextScores.reduce(function(a,b) {
						return a + b
					}, 0);
				}
				
				var totalDifference = Math.abs(totalScore - nextTotalScore);

				// if there is a new best match, point new best match's index and set the new best diff
				if(totalDifference < bestMatchDifference) {
					bestMatchIndex = i;
					bestMatchDifferenc = totalDifference;
				};
			};

			
			friends.push(user);

			res.json(friends[bestMatchIndex]);
	});

};

  