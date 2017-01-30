

// var BasicCard = require('./BasicCard.js');    // not sure if these need to be in sep. files. 
// var ClozeCard = require('./ClozeCard.js');

// A function for the flashcard
function FlashCard(front, back) {
	var card = {};

	card.front = front;  
	card.back = back;

	return FlashCard;
}

// My basiccard with a front and back
var BasicCard = new FlashCard{
	front: "who was the first Black president of the United states?",
	back: "Barack Obama"

};

return BasicCard;	

// clozecard with (fill in the blank) cloze statement
var ClozeCard = new FlashCard{
	cloze : "{{c1::Barack Obama}} was The first Black president of the United states"};
	
return FlashCard;	


// consoling cards!
console.log(BasicCard);
console.log(ClozeCard);
console.log(FlashCard);






