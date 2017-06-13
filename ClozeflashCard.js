var fs = require('fs');
module.exports = clozeCard;


function clozeCard(text,cloze){
 	this.text = text;
 	this.cloze = cloze;
 	this.clozeDeleted = this.text.replace(this.cloze, '_________');
 	this.create =function() {
	var data ={
	text: this.text,
	cloze : this.cloze,
	clozeDeleted : this.clozeDeleted,
	type:cloze
}

fs.appendFile("log.text", JSON.stringify(data)+ ';' +'utf8', function(error) {
 	if (error){
 	   console.log(error);
 	}
  });
}
}

