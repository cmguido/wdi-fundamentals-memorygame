console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push(cards[0]);
var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		} 
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match");
		} else {
		alert("Sorry try again!");
		}
};
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
		checkForMatch();
	};
flipCard(0);
flipCard(2);



