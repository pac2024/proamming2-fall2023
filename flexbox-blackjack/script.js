// let dcardSpace1 = document.getElementById("dcard1");
// let dcardSpace2 = document.getElementById("dcard2");
// let dcardSpace3 = document.getElementById("dcard3");
// let dcardSpace4 = document.getElementById("dcard4");
// let pcardSpace1 = document.getElementById("pcard1");
// let pcardSpace2 = document.getElementById("pcard2");
// let pcardSpace3 = document.getElementById("pcard3");
// let pcardSpace4 = document.getElementById("pcard4");
// let playerScoreElement = document.getElementById("playerScore");
// let dealerScoreElement = document.getElementById("dealerScore");
// let hitButton = document.getElementById("hit");
// let standButton = document.getElementById("stand");
// let resetButton = document.getElementById("reset");
// let infoBoxElement = document.getElementById("info-box");

// let userScore = 0;
// let dealerScore = 0;
// let cardDeck  = [];
// let userCards = [];
// let dealerCards = [];

// let cardScoreValues = {
//   '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 1,
//   '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 1,
//   '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 1,
//   '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 1,
// };

// function drawCard(cardList){
// let randomNum = Math.floor(Math.random() * (cardList.length-1));
// const drawnCard = cardList.splice(randomNum, 1)[0];
// return drawnCard;
// }


// function reset(){
// dealerImage.src = "images/dealer.png";
// // alert("you clicked reset");
// userCards = [];
// dealerCards = []
// //reset scores to 0
// userScore = 0;
// dealerScore = 0;
// // reset message
// infoBoxElement.innerText = "Your turn";
// // reset deck
// cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

// // deal 2 cards (face up) to player

// let userCard1 = drawCard(cardDeck);
// let userCard2 = drawCard(cardDeck);
// userCards.push(userCard1);
// userCards.push(userCard2);


// // deal two cards (1 face up, 1 face down) to dealer

// let dealerCard1 = drawCard(cardDeck);
// let dealerCard2 = drawCard(cardDeck);
// dealerCards.push(dealerCard1);
// dealerCards.push(dealerCard2);

// console.log (userCards);
// console.log (dealerCards);

// dcardSpace1.src = ("images/back.png");
// dcardSpace2.src = "images/" + dealerCard2 + ".svg";
// dcardSpace3.src = "images/blank.svg"
// dcardSpace4.src = "images/blank.svg"

// pcardSpace1.src = "images/" + userCard1 + ".svg";
// pcardSpace2.src = "images/" + userCard2 + ".svg";
// pcardSpace3.src = "images/blank.svg"
// pcardSpace4.src = "images/blank.svg"


// //calculate dealer score

// dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];

// //calculate user score
// userScore = cardScoreValues[userCard1] + cardScoreValues[userCard2];

// // update scores on the ui
// dealerScoreElement.innerText = "Dealer Score:" + "?";
// playerScoreElement.innerText = "Your Score:" + userScore;


// // enable hit and stand buttons

// hitButton.disabled = false;
// standButton.disabled = false;



// }

// function stand(){
// dcardSpace1.src = "images/" + dealerCards[0] + ".svg";
// dealerImage.src = "images/dealer-F.png";
// dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
// while (dealerCards.length < 4 && dealerScore <= 16){

// if(dealerCards.length == 2){
// let dealerCard3 = drawCard(cardDeck);
// dealerCards.push(dealerCard3);
// dealerScore =  dealerScore +  cardScoreValues[dealerCard3];
// // update UI card
// dcardSpace3.src = "images/" + dealerCard3 + ".svg";
// //update UI score
// dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
// }

// else if (dealerCards.length == 3){
// let dealerCard4 = drawCard(cardDeck);
// dealerCards.push(dealerCard4);
// dealerScore =  dealerScore +  cardScoreValues[dealerCard4];
// // update UI card
// dcardSpace4.src = "images/" + dealerCard4 + ".svg";
// //update UI score
// dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
// }

// }

// hitButton.disabled = true;
// standButton.disabled = true;





// if (userScore > 21){
// infoBoxElement.innerText = "You Bust!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// else if (dealerScore > userScore && dealerScore <22){
// infoBoxElement.innerText = "Dealer Wins";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// else if (userScore > dealerScore && userScore != 21){
// infoBoxElement.innerText = "You Win!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// // else if (dealerScore > 17 && dealerScore < 21 && userScore != 21){
// // infoBoxElement.innerText = "You Win!  Press Reset to play again.";
// // hitButton.disabled = true;
// // standButton.disabled = true;
// // }

// else if (dealerScore > 21){
// infoBoxElement.innerText = "You Win!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// else if (userScore < dealerScore && dealerScore <22 && dealerScore != 21){
// infoBoxElement.innerText = "Dealer Wins!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// else if (dealerScore == 21 && userScore == 21){
// infoBoxElement.innerText = "You both got BlackJack! Tie Game!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// else if (userScore == 21 ){
// infoBoxElement.innerText = "You got BlackJack! You win!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }
// else if (dealerScore == 21 ){
// infoBoxElement.innerText = "The dealer got BlackJack! You lose!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }



// else if (dealerScore == userScore){
// infoBoxElement.innerText = "Dealer Wins! (The dealer wins tie games)  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }


// else{
// infoBoxElement.innerText = "Working the Magic ...";
// }

// }

// function hit(){
// // alert("you clicked hit");


// // draw card
// if (userCards.length == 2){
// let userCard3 = drawCard(cardDeck);
// userCards.push(userCard3);
// // change score
// userScore =  userScore +  cardScoreValues[userCard3];
// // update UI card
// pcardSpace3.src = "images/" + userCard3 + ".svg";
// //update UI score
// playerScoreElement.innerText = "Your Score:" + userScore;
// }

// else if (userCards.length == 3){
// let userCard4 = drawCard(cardDeck);
// userCards.push(userCard4);
// // change score
// userScore =  userScore +  cardScoreValues[userCard4];
// // update UI card
// pcardSpace4.src = "images/" + userCard4 + ".svg";
// //update UI score
// playerScoreElement.innerText = "Your Score:" + userScore;
// }

// else{
// hitButton.disabled = true;
// standButton.disabled = true;
// }

// if (userScore > 21){
// infoBoxElement.innerText = "You Bust!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }




// }

//

// let dcardSpace1 = document.getElementById("dcard1");
// let dcardSpace2 = document.getElementById("dcard2");
// let dcardSpace3 = document.getElementById("dcard3");
// let dcardSpace4 = document.getElementById("dcard4");
// let pcardSpace1 = document.getElementById("pcard1");
// let pcardSpace2 = document.getElementById("pcard2");
// let pcardSpace3 = document.getElementById("pcard3");
// let pcardSpace4 = document.getElementById("pcard4");
// let playerScoreElement = document.getElementById("playerScore");
// let dealerScoreElement = document.getElementById("dealerScore");
// let hitButton = document.getElementById("hit");
// let standButton = document.getElementById("stand");
// let resetButton = document.getElementById("reset");
// let infoBoxElement = document.getElementById("info-box");

// let userScore = 0;
// let dealerScore = 0;
// let cardDeck = [];
// let userCards = [];
// let dealerCards = [];

// let cardScoreValues = {
//     // Card values here
// };

// function initializeDeck() {
//     const suits = ['H', 'D', 'C', 'S'];
//     const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

//     cardDeck = [];

//     for (let suit of suits) {
//         for (let value of values) {
//             cardDeck.push(value + suit);
//         }
//     }
// }

// function drawCard(cardList) {
//     let randomNum = Math.floor(Math.random() * cardList.length);
//     const drawnCard = cardList.splice(randomNum, 1)[0];
//     return drawnCard;
// }

// function reset() {
//     initializeDeck();
//     userCards = [];
//     dealerCards = [];
//     userScore = 0;
//     dealerScore = 0;

//     userCards.push(drawCard(cardDeck));
//     userCards.push(drawCard(cardDeck));
//     dealerCards.push(drawCard(cardDeck));
//     dealerCards.push(drawCard(cardDeck));

//     updateScores();
//     updateCardDisplays();

//     hitButton.disabled = false;
//     standButton.disabled = false;
//     infoBoxElement.innerText = "Your turn";
// }

// function updateScores() {
//     userScore = calculateScore(userCards);
//     dealerScore = calculateScore(dealerCards);
//     playerScoreElement.innerText = "Your Score: " + userScore;
//     dealerScoreElement.innerText = "Dealer Score: ?";
// }

// function calculateScore(cards) {
//     let score = 0;
//     let aceCount = 0;

//     for (let card of cards) {
//         let value = card.substring(0, card.length - 1);
//         score += cardScoreValues[value];
//         if (value === 'A') {
//             aceCount++;
//         }
//     }

//     while (score > 21 && aceCount > 0) {
//         score -= 10;
//         aceCount--;
//     }

//     return score;
// }

// function updateCardDisplays() {
//     pcardSpace1.src = getCardImage(userCards[0]);
//     pcardSpace2.src = getCardImage(userCards[1]);
//     pcardSpace3.src = "images/blank.svg";
//     pcardSpace4.src = "images/blank.svg";

//     dcardSpace1.src = "images/back.png";
//     dcardSpace2.src = getCardImage(dealerCards[1]);
//     dcardSpace3.src = "images/blank.svg";
//     dcardSpace4.src = "images/blank.svg";
// }

// function getCardImage(card) {
//     return "images/" + card + ".svg";
// }

// function hit() {
//     if (userCards.length < 20) {
//         userCards.push(drawCard(cardDeck));
//         updateScores();
//         updateCardDisplays();

//         if (userScore > 21) {
//             hitButton.disabled = true;
//             standButton.disabled = true;
//             infoBoxElement.innerText = "Bust! Press Reset to play again.";
//         }
//     }
// }

// function stand() {
//     hitButton.disabled = true;
//     standButton.disabled = true;

//     // Reveal dealer's hidden card
//     dcardSpace1.src = getCardImage(dealerCards[0]);
//     dealerScoreElement.innerText = "Dealer Score: " + dealerScore;

//     // Dealer hits until reaching 17 or higher
//     while (dealerScore < 17 && dealerCards.length < 4) {
//         dealerCards.push(drawCard(cardDeck));
//         updateScores();
//         updateCardDisplays();
//     }

//     // Determine winner
//     if (dealerScore > 21 || userScore > dealerScore) {
//         infoBoxElement.innerText = "You win! Press Reset to play again.";
//     } else if (dealerScore === userScore) {
//         infoBoxElement.innerText = "Push (tie). Press Reset to play again.";
//     } else {
//         infoBoxElement.innerText = "Dealer wins. Press Reset to play again.";
//     }
// }

// reset(); // Initialize the game

let dcardSpace1 = document.getElementById("dcard1");
let dcardSpace2 = document.getElementById("dcard2");
let dcardSpace3 = document.getElementById("dcard3");
let dcardSpace4 = document.getElementById("dcard4");
let pcardSpace1 = document.getElementById("pcard1");
let pcardSpace2 = document.getElementById("pcard2");
let pcardSpace3 = document.getElementById("pcard3");
let pcardSpace4 = document.getElementById("pcard4");
let playerScoreElement = document.getElementById("playerScore");
let dealerScoreElement = document.getElementById("dealerScore");
let hitButton = document.getElementById("hit");
let standButton = document.getElementById("stand");
let resetButton = document.getElementById("reset");
let infoBoxElement = document.getElementById("info-box");

let userScore = 0;
let dealerScore = 0;
let cardDeck  = [];
let userCards = [];
let dealerCards = [];

let cardScoreValues = {
  '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 1,
  '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 1,
  '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 1,
  '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 1,
};

function drawCard(cardList){
let randomNum = Math.floor(Math.random() * (cardList.length-1));
const drawnCard = cardList.splice(randomNum, 1)[0];
return drawnCard;
}


function reset(){
// alert("you clicked reset");
userCards = [];
dealerCards = []
//reset scores to 0
userScore = 0;
dealerScore = 0;
// reset message
infoBoxElement.innerText = "Your turn";
// reset deck
cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

// deal 2 cards (face up) to player

let userCard1 = drawCard(cardDeck);
let userCard2 = drawCard(cardDeck);
userCards.push(userCard1);
userCards.push(userCard2);


// deal two cards (1 face up, 1 face down) to dealer

let dealerCard1 = drawCard(cardDeck);
let dealerCard2 = drawCard(cardDeck);
dealerCards.push(dealerCard1);
dealerCards.push(dealerCard2);

console.log (userCards);
console.log (dealerCards);

dcardSpace1.src = ("images/back.png");
dcardSpace2.src = "images/" + dealerCard2 + ".svg";
dcardSpace3.src = "images/blank.svg"
dcardSpace4.src = "images/blank.svg"

pcardSpace1.src = "images/" + userCard1 + ".svg";
pcardSpace2.src = "images/" + userCard2 + ".svg";
pcardSpace3.src = "images/blank.svg"
pcardSpace4.src = "images/blank.svg"


//calculate dealer score

dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];

//calculate user score
userScore = cardScoreValues[userCard1] + cardScoreValues[userCard2];

// update scores on the ui
dealerScoreElement.innerText = "Dealer Score:" + "?";
playerScoreElement.innerText = "Your Score:" + userScore;


// enable hit and stand buttons

hitButton.disabled = false;
standButton.disabled = false;



}

function stand(){
dcardSpace1.src = "images/" + dealerCards[0] + ".svg";
dealerImage.src = "images/dealer-F.png";
dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
while (dealerCards.length < 4 && dealerScore <= 16){

if(dealerCards.length == 2){
let dealerCard3 = drawCard(cardDeck);
dealerCards.push(dealerCard3);
dealerScore =  dealerScore +  cardScoreValues[dealerCard3];
// update UI card
dcardSpace3.src = "images/" + dealerCard3 + ".svg";
//update UI score
dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
}

else if (dealerCards.length == 3){
let dealerCard4 = drawCard(cardDeck);
dealerCards.push(dealerCard4);
dealerScore =  dealerScore +  cardScoreValues[dealerCard4];
// update UI card
dcardSpace4.src = "images/" + dealerCard4 + ".svg";
//update UI score
dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
}

}

hitButton.disabled = true;
standButton.disabled = true;





if (userScore > 21){
infoBoxElement.innerText = "You Bust!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}

else if (dealerScore > userScore && dealerScore <22){
infoBoxElement.innerText = "Dealer Wins";
hitButton.disabled = true;
standButton.disabled = true;
}

else if (userScore > dealerScore && userScore != 21){
infoBoxElement.innerText = "You Win!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}

// else if (dealerScore > 17 && dealerScore < 21 && userScore != 21){
// infoBoxElement.innerText = "You Win!  Press Reset to play again.";
// hitButton.disabled = true;
// standButton.disabled = true;
// }

else if (dealerScore > 21){
infoBoxElement.innerText = "You Win!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}

else if (userScore < dealerScore && dealerScore <22 && dealerScore != 21){
infoBoxElement.innerText = "Dealer Wins!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}

else if (dealerScore == 21 && userScore == 21){
infoBoxElement.innerText = "You both got BlackJack! Tie Game!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}

else if (userScore == 21 ){
infoBoxElement.innerText = "You got BlackJack! You win!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}
else if (dealerScore == 21 ){
infoBoxElement.innerText = "The dealer got BlackJack! You lose!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}



else if (dealerScore == userScore){
infoBoxElement.innerText = "Dealer Wins! (The dealer wins tie games)  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}


else{
infoBoxElement.innerText = "Working the Magic ...";
}

}

function hit(){
// alert("you clicked hit");


// draw card
if (userCards.length == 2){
let userCard3 = drawCard(cardDeck);
userCards.push(userCard3);
// change score
userScore =  userScore +  cardScoreValues[userCard3];
// update UI card
pcardSpace3.src = "images/" + userCard3 + ".svg";
//update UI score
playerScoreElement.innerText = "Your Score:" + userScore;
}

else if (userCards.length == 3){
let userCard4 = drawCard(cardDeck);
userCards.push(userCard4);
// change score
userScore =  userScore +  cardScoreValues[userCard4];
// update UI card
pcardSpace4.src = "images/" + userCard4 + ".svg";
//update UI score
playerScoreElement.innerText = "Your Score:" + userScore;
}

else{
hitButton.disabled = true;
standButton.disabled = true;
}

if (userScore > 21){
infoBoxElement.innerText = "You Bust!  Press Reset to play again.";
hitButton.disabled = true;
standButton.disabled = true;
}




}






