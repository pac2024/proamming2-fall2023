

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



/////
let dealerCardsDivs = document.querySelectorAll(".dealer-section .card img");
let playerCardsDivs = document.querySelectorAll(".player-section .card img");
let playerScoreElement = document.querySelector(".player-section .score .player-score");
let dealerScoreElement = document.querySelector(".dealer-section .score .dealer-score");
let hitButton = document.querySelector(".action-container .action-btn:first-child");
let standButton = document.querySelector(".action-container .action-btn:last-child");
let infoBoxElement = document.querySelector(".player-section .message-area");

let userScore = 0;
let dealerScore = 0;
let cardDeck = [];
let userCards = [];
let dealerCards = [];

let cardScoreValues = {
    '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 1,
   '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 1,
   '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 1,
   '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 1,
 };


function drawCard(cardList) {
    let randomNum = Math.floor(Math.random() * cardList.length);
    const drawnCard = cardList.splice(randomNum, 1)[0];
    return drawnCard;
}

function reset() {
    // Reset logic
    userCards = [];
    dealerCards = [];
    userScore = 0;
    dealerScore = 0;
    infoBoxElement.innerText = "Your turn";
    cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

    // Reset card images and scores in the UI
    dealerCardsDivs.forEach((img, index) => {
        img.src = index === 0 ? "images/back.png" : "images/blank.png";
    });
    playerCardsDivs.forEach(img => img.src = "images/blank.png");

    playerScoreElement.textContent = "0";
    dealerScoreElement.textContent = "?";

    // Deal initial cards
    dealInitialCards();
}

function dealInitialCards() {
    let userCard1 = drawCard(cardDeck);
    let userCard2 = drawCard(cardDeck);
    userCards.push(userCard1, userCard2);

    let dealerCard1 = drawCard(cardDeck);
    let dealerCard2 = drawCard(cardDeck);
    dealerCards.push(dealerCard1, dealerCard2);

    // Update UI for initial cards
    playerCardsDivs[0].src = "images/" + userCard1 + ".png";
    playerCardsDivs[1].src = "images/" + userCard2 + ".png";
    dealerCardsDivs[1].src = "images/" + dealerCard2 + ".png";

    // Calculate initial scores
    userScore = cardScoreValues[userCard1] + cardScoreValues[userCard2];
    dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];

    // Update scores on the UI
    playerScoreElement.innerText = userScore;
    dealerScoreElement.innerText = "?";

    // Enable hit and stand buttons
    hitButton.disabled = false;
    standButton.disabled = false;
}

function stand() {
    // Stand logic
    dealerCardsDivs[0].src = "images/" + dealerCards[0] + ".png";
    dealerScoreElement.innerText = dealerScore;

    // Additional stand logic...
    // (You need to implement the logic for when the player chooses to stand)
}

function hit() {
    // Hit logic
    if (userCards.length < 4) {
        let newUserCard = drawCard(cardDeck);
        userCards.push(newUserCard);
        playerCardsDivs[userCards.length - 1].src = "images/" + newUserCard + ".png";
        userScore += cardScoreValues[newUserCard];
        playerScoreElement.innerText = userScore;

        if (userScore > 21) {
            infoBoxElement.innerText = "You Bust! Press Reset to play again.";
            hitButton.disabled = true;
            standButton.disabled = true;
        }
    }
}

// Event listeners for buttons
hitButton.addEventListener('click', hit);
standButton.addEventListener('click', stand);

// Initialize the game
reset();
