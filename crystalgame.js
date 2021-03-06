// Paul Richard
$(document).ready(function(){
	console.log("hello world!"); // checking to make sure it's linked.

	var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
	var blueNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var greenNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var redNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var yellowNum = Math.floor(Math.random() * (12 - 1)) + 1;
	var wins = 0;
	var losses = 0;
	var guessTotal = 0;

	$("#randomNumber").html(randomNum); // Displays the randomly generated number.
	$("#winText").html(wins); //Displays total number of wins.
	$("#lossText").html(losses); // Displays total number of losses.

	$("#redButton").on("click", function(){ //Adds the value of the red Number to the total guesses when red button is clicked.
		guessTotal = guessTotal += redNum;
		$("#currentGuess").html(guessTotal); // updates total number display
		console.log("red number is: " + redNum);
		console.log("running total: " + guessTotal);
		winCheck(); // Sees if this move ended the game
	})

	$("#greenButton").on("click", function(){ //Adds the value of the green Number to the total guesses when red button is clicked.
		guessTotal = guessTotal += greenNum;
		$("#currentGuess").html(guessTotal); // updates total number display
		console.log("green number is: " + greenNum);
		console.log("running total: " + guessTotal);
		winCheck(); // Sees if this move ended the game
	})

	$("#blueButton").on("click", function(){ //Adds the value of the blue Number to the total guesses when blue button is clicked.
		guessTotal = guessTotal += blueNum;
		$("#currentGuess").html(guessTotal); // updates total number display
		console.log("blue number is: " + blueNum);
		console.log("running total: " + guessTotal);
		winCheck(); // Sees if this move ended the game
	})

	$("#yellowButton").on("click", function(){ //Adds the value of the yellow Number to the total guesses when yellow button is clicked.
		guessTotal = guessTotal += yellowNum;
		$("#currentGuess").html(guessTotal); // updates total number display
		console.log("yellow number is: " + yellowNum);
		console.log("running total: " + guessTotal);
		winCheck(); // Sees if this move ended the game
	})

	function winCheck() {
		if (guessTotal === randomNum) { //If the numbers match you win
			wins++;
			// $("#winOrLose").html("You win!");
			$("#winText").html(wins); //Displays total number of wins.
			alert("you win!");
			reset(); //runs the reset function so everything goes back to zero.
		}
		if (guessTotal > randomNum) { //If your guesses go over the random number you lose.
			losses++;		
			// $("#winOrLose").html("you lose!");
			alert("you lose!");
			$("#lossText").html(losses); // Displays total number of losses.
			reset(); //runs the reset function so everything goes back to zero.
		}
	}

	function reset() { //Resets the random values of all the numbers and begins a new round.
		guessTotal = 0;
		randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
		blueNum = Math.floor(Math.random() * (12 - 1)) + 1;
		redNum = Math.floor(Math.random() * (12 - 1)) + 1;
		greenNum = Math.floor(Math.random() * (12 - 1)) + 1;
		yellowNum = Math.floor(Math.random() * (12 - 1)) + 1;
		$("#randomNumber").html(randomNum); // updates the display of the randomly generated number.
		$("#currentGuess").html(guessTotal); // updates total number display
	}
});