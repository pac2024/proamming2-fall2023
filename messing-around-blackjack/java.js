document.addEventListener("DOMContentLoaded", function() {
    let deck = [];
    let playerHand = [];
    let dealerHand = [];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const startGameButton = document.getElementById("startGameButton");
    const hitButton = document.getElementById("hitButton");
    const standButton = document.getElementById("standButton");
    const playerHandDiv = document.getElementById("playerHand");
    const dealerHandDiv = document.getElementById("dealerHand");
    const gameResultDiv = document.getElementById("gameResult");

    hitButton.style.display = "none";
    standButton.style.display = "none";

    function createDeck() {
        deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push({ suit, value });
            }
        }
        shuffleDeck();
    }

    function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    function startGame() {
        createDeck();
        playerHand = [drawCard(), drawCard()];
        dealerHand = [drawCard(), drawCard()];
        updateGameDisplay();
        hitButton.style.display = "inline";
        standButton.style.display = "inline";
        gameResultDiv.innerText = "";
    }

    function drawCard() {
        return deck.pop();
    }

    function updateGameDisplay() {
        playerHandDiv.innerHTML = handToHtml(playerHand);
        dealerHandDiv.innerHTML = handToHtml(dealerHand);
    }

    function handToHtml(hand) {
        return hand.map(card => `<div class="card">${card.value} of ${card.suit}</div>`).join('');
    }

    startGameButton.addEventListener("click", startGame);

    hitButton.addEventListener("click", function() {
        playerHand.push(drawCard());
        updateGameDisplay();
        if (calculateHandValue(playerHand) > 21) {
            gameResultDiv.innerText = "Player busts!";
            hitButton.style.display = "none";
            standButton.style.display = "none";
        }
    });

    standButton.addEventListener("click", function() {
        hitButton.style.display = "none";
        standButton.style.display = "none";
        // Simple dealer logic, can be improved
        while (calculateHandValue(dealerHand) < 17) {
            dealerHand.push(drawCard());
        }
        updateGameDisplay();
        endGame();
    });

    function calculateHandValue(hand) {
        let value = 0;
        let aceCount = 0;
        for (let card of hand) {
            if (card.value === "A") {
                aceCount++;
                value += 11;
            } else if (["J", "Q", "K"].includes(card.value)) {
                value += 10;
            } else {
                value += parseInt(card.value);
            }
        }
        while (value > 21 && aceCount > 0) {
            value -= 10;
            aceCount--;
        }
        return value;
    }

    function endGame() {
        const playerValue = calculateHandValue(playerHand);
        const dealerValue = calculateHandValue(dealerHand);
        if (playerValue > 21) {
            gameResultDiv.innerText = "Player busts! Dealer wins.";
        } else if (dealerValue > 21) {
            gameResultDiv.innerText = "Dealer busts! Player wins.";
        } else if (playerValue > dealerValue) {
            gameResultDiv.innerText = "Player wins!";
        } else if (playerValue < dealerValue) {
            gameResultDiv.innerText = "Dealer wins!";
        } else {
            gameResultDiv.innerText = "Push (tie).";
        }
    }
});
