// import the basic.js
var BasicCard = require('./Basic.js');
// Import the question data bank
var cardData = require("./basic.json");
// require the imquirer pakage
var inquirer = require('inquirer');
// require the fs pakage
var fs = require ('fs');

// export the module
module.exports = initBasicGame;

// intialize the game through finction
function initBasicGame() {
	// declaring the variables inside the function
	var currentCard;
	var cardArray = [];
	var initialScore = 0;
	var initialIndex = 0;

	// looping the card array
	for (var i = 0; i < cardData.length; i++) {
		// creating a new instance for the basic card/front and back both sides
   		currentCard = new BasicCard(cardData[i].front, cardData[i].back);
   		// pushing the cards in the current card deck
   		cardArray.push(currentCard);
	}

	// playing the round
	playRound(initialScore, initialIndex, cardArray);
	
}

//  invoking the function to play game
function playRound(currentScore, currentIndex, cardArray) {
		// if condition to check the new cards are available
		if(currentIndex< cardArray.length) {
			// propmt user to play next card
			promptUser(cardArray, currentIndex, currentScore);
			// or else finish the game
		} else {
			endGame(currentScore);
		}
}
// invoking the function end game 
function endGame(score){
	console.log('End game');
	console.log(score);
	//  asking the user if they want to play more game
	inquirer.prompt([{
		type: "input",
		name: "text",
		message: "Do you want to play again?"
	}]).then(function(answer){
		// if user wants to play more game 
		if(answer.text === 'yes' || answer.text === 'y'){
			// intialize the game again
			initGame();
		} else {
			console.log('Thankyou for playing!');
		}
	})
}
 
 // function to prompt the user to play card
function promptUser(cardArray,currentIndex,currentScore) {
	var card = cardArray[currentIndex];
	inquirer.prompt([{
		type: "input",
		name: "text",
		message: card.front +"\nAnswer"	
	}]).then (function(answer){
		if(answer.text.trim().toLowerCase() === card.back.trim().toLowerCase()){
			currentScore++;
			console.log("your answer is  correct");
		} else{
			console.log("sorry you are wrong! currentanswer is" + card.back);
		currentIndex++;

		playRound(currentScore,currentIndex,cardArray);

	}
})
		}