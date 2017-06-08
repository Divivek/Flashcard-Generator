var Questions = [];

var Answers = [];

function Questions(){

}

Questions.prototype.CorrectAnswer = function(choices) {
return choices = this.Answers;
};

function Quiz(Questions){
	this.score
	this.Questions
	this.QuestionsIndexes
}
Quiz.prototype.getQuestionsIndexes = function{
	return(this.Questions[this.QuestionsIndexes])
}
Quiz.prototype.Isended = function{
	this.Questions.length === this.QuestionsIndexes
}

Quiz.prototype.Guess = function(Answers){
	this.QuestionsIndexes++;
	if(this,getQuestionsIndexes().CorrectAnswer(Answers))
}
var Quiz = new Quiz(Questions)
 function populate() {
 	if(Quiz.Isended){
 		show-score();
 		
 	}
 }

}
}