$(document).ready(function(){
	console.log("hello world!"); // checking to make sure it's linked.

	var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
	var guesses = [];
	var guessTotal = 0;
	var blueNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var greenNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var redNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var yellowNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var wins = 0;
	var losses = 0;

	$("#randomNumber").html(randomNum); // Displays the randomly generated number.

	$("#redButton").on("click", function(){ //Adds the value of the red Number to the total guesses when red button is clicked.
		console.log("red number is: " + redNum);
		guesses.push(redNum);
		console.log(guesses);
	})

	$("#greenButton").on("click", function(){ //Adds the value of the green Number to the total guesses when red button is clicked.
		console.log("green number is: " + greenNum);
		guesses.push(greenNum);
		console.log(guesses);
	})

	$("#blueButton").on("click", function(){ //Adds the value of the blue Number to the total guesses when blue button is clicked.
		console.log("blue number is: " + blueNum);
		guesses.push(blueNum);
		console.log(guesses);
	})

	$("#yellowButton").on("click", function(){ //Adds the value of the yellow Number to the total guesses when yellow button is clicked.
		console.log("yellow number is: " + yellowNum);
		guesses.push(yellowNum);
		console.log(guesses);
	})

});