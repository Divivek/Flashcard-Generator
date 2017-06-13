// Require the inquirer pakage
var inquirer = require('inquirer');
// Require the fs pakage
var fs = require ('fs');
// import the flash card basic implementation
var BasicCard = require('./flashCardBasic.js');
// Import the flash card cloze implementation
var clozeCard = require('./clozeCard.js');
// call the function choose card for card selection
chooseCard();
// Selection of Game Choices /prompt user to pick the choices 
function chooseCard() {
 	inquirer.prompt([{
        type: "input",
        message: "What type of flashcard do you want to create?",
        choices: ["Basic Card" , "Cloze Card"],
        name: "cardType"
        }]).then(function (appData) {
        
        if (appData.cardType === "BasicCard") {	//If the cards type is "BasicCard" then....
            // create a new instance of basic card
	    	console.log('you choose BasicCard');
	    	bc = new BasicCard();
	    	bc.initBasicGame;
  		} 

     	if (appData.cardType === "ClozeCard") {	//If the cards type is "ClozeCard" then....
        	console.log('you choose ClozeCard');
        	// create a new instance of cloze Card.
	    	cc = new clozeCard();
	    	cc.initClozeGame;
	  	} 
	}) 
} // Function main
