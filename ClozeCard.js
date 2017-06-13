// requireing the pakages
var fs = require ('fs');
var clozeCard = require('./ClozeflashCard.js');
var  inquirer = require ('inquirer');
var clozeCardData = require('./clozeflashCard.json');

// exporting the module
module.exports = initClozeGame;

// intializing the game
function initClozeGame() {
	var currentClozeCard ;
	var clozeCardArray = [];
	var initialClozeCardIndex = 0;
	var clozeCardIntialScore = 0;
	// loop through the cards
    for (var i = 0; i < clozeCardData.length; i++) {
    	// creating new instance of cards
     	currentClozeCard =  new clozeCard(clozeCardData[i].phrase,clozeCardData[i].cloze);
     	// pusing the cards to the array
     	clozeCardArray.push(currentClozeCard);
    }

    // playing the round
	playRound(clozeCardIntialScore, initialClozeCardIndex, clozeCardArray);

}

// function to play game
function playRound(currentClozeCardScore, currentClozeCardIndex, clozeCardArray){
	// setting the condition to check cards availability
	if(currentClozeCardIndex < clozeCardArray.length){
		// show the user next card
		promptUser(currentClozeCardScore,currentClozeCardIndex,clozeCardArray);
	} else {
		// end the game if cards deck is empty
		endGame(currentClozeCardScore);
	}
}	

// function to finish the game
function endGame(clozeScore){
	console.log('End Game');
	console.log('clozeScore');
	inquirer.prompt([{
		type: "input",
		name: "text",
		message:'Do you want to play again?'
	}])
	 .then (function(answer){
		if(answer.text=== yes || answer.text === y ){
		initClozeGame();
		} else {
		console.log('Thank you!play again');
		}
		
		intialClozeCardIndex++;
		playRound(clozeCardCurrentScore, CurrentClozeCardIndex, clozeCardArray)
	});
}	

// function to prompt the user
function promptUser(clozeCardCurrentScore,CurrentClozeCardIndex,clozecardArray) {
	var clozeCard = clozecardArray[CurrentClozeCardIndex].clozeDeleted;
	inquirer.prompt([{
		type: "input",
		name: "text",
		message: clozeCard +"\nAnswer"	
	}]).then (function(answer){
		if(answer.text.trim().toLowerCase() === clozecardArray[CurrentClozeCardIndex].cloze.trim().toLowerCase()){
			clozeCardCurrentScore++;
			console.log("you answer is correct");
		} else{
			console.log("sorry you are wrong! currentanswer is" + clozecardArray[CurrentClozeCardIndex].cloze);

		}
			clozeCardCurrentScore++;
			CurrentClozeCardIndex++;
			playRound(clozeCardCurrentScore, CurrentClozeCardIndex, clozecardArray)
		});
	};