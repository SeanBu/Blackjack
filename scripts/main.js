const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay');
const cpuArea = document.querySelector('.cpu-area');
const gameMessageArea = document.querySelector('.game-messages');
const playerArea = document.querySelector('.player-area');
const newGameButton = document.querySelector('#new-game');

let playerSum;
let playerSumA;
let cpuSum;
let cpuSumA;
let playerStay;
let cpuStay;

let deck = []; // the deck of cards from which the player and cpu are drawing from
let discardPile = []; // the cards that have been already played
let playerHand = []; // the cards that the player currently holds
let cpuHand = []; // the cards that the cpu currently holds

newGameButton.addEventListener('click', newGame);
hitButton.addEventListener('click', hit);
stayButton.addEventListener('click', stay);


// class that all of our cards will use
class Card {
    constructor(suit, value, picture) {
        this.suit = suit;
        this.value = value;
        this.picture = picture
    }

    getValue() {
        return this.value;
    }

    getPicture() {
        return this.picture;
    }
}

newGame(); // sets up the game when the page is loaded and also makes a new game when the new game button is pressed.

//13 cards per suit
// creates 13 instances of the Card class and adds them to an array called Deck
// assigns a suit, value of the card (in black jack values are 1-10 and the ace is either 1 or 11)
// assigns the path to the image of the card
function createHearts() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Hearts', i + 1, `./cards/H${i + 1}.png`));
        } else {
            deck.push(new Card('Hearts', 10, `./cards/H${i + 1}.png`));
        }
    }
}

function createSpades() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Spades', i + 1, `./cards/S${i + 1}.png`));
        } else {
            deck.push(new Card('Spades', 10, `./cards/S${i + 1}.png`));
        }
    }
}

function createDiamonds() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Diamonds', i + 1, `./cards/D${i + 1}.png`));
        } else {
            deck.push(new Card('Diamonds', 10, `./cards/D${i + 1}.png`));
        }
    }
}

function createClubs() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Clubs', i + 1, `./cards/C${i + 1}.png`));
        } else {
            deck.push(new Card('Clubs', 10, `./cards/C${i + 1}.png`));
        }
    }
}

// gives 2 cards to the player and cpu randomly the deck[]. The cards are assigned 1 at a time to each player and cpu
function initialDeal() {
    for (let i = 0; i <= 1; i++) {
        let randNum = Math.floor(Math.random() * deck.length);
        playerHand.push(deck[randNum]);
        discardPile.push(deck[randNum]);
        deck.splice(randNum, 1);
        randNum = Math.floor(Math.random() * deck.length);
        cpuHand.push(deck[randNum]);
        discardPile.push(deck[randNum]);
        deck.splice(randNum, 1);
        if (playerHand[i].getValue() === 1) {
            playerSum += playerHand[i].getValue();
            playerSumA += playerHand[i].getValue() + 10;
        } else if (playerHand[i].getValue() !== 1) {
            playerSum += playerHand[i].getValue();
            playerSumA += playerHand[i].getValue();
        }
        if (cpuHand[i].getValue() === 1) {
            cpuSum += cpuHand[i].getValue();
            cpuSumA += cpuHand[i].getValue() + 10;
        } else if (cpuHand[i].getValue() !== 1) {
            cpuSum += cpuHand[i].getValue();
            cpuSumA += cpuHand[i].getValue();
        }
    }
    // display the pictures of the cards based off of what is in the player and cpu hand
    playerArea.innerHTML = `<img src=${playerHand[0].getPicture()}> 
    <img src=${playerHand[1].getPicture()}>`;
    cpuArea.innerHTML = `<img src=${cpuHand[0].getPicture()}> 
    <img src=./cards/red2.png>`;
    if (playerHand[0].getValue() === 1 || playerHand[1].getValue() === 1) {
        gameMessageArea.innerHTML = `total: ${playerSum} or ${playerSumA}, Dealer Sum: ${cpuHand[0].getValue()}`;
    } else if (playerHand[0].getValue() > 1 && playerHand[1].getValue() > 1) {
        gameMessageArea.innerHTML = `total: ${playerSum}, Dealer Sum: ${cpuHand[0].getValue()}`;
    }
    checkForInitalWinner();
}

function newGame() {
    playerSum = 0;
    playerSumA = 0;
    cpuSum = 0;
    cpuSumA = 0;
    playerStay = false;
    cpuStay = false;
    deck = [];
    discardPile = [];
    playerHand = [];
    cpuHand = [];
    createHearts();
    createSpades();
    createDiamonds();
    createClubs();
    initialDeal();
}

function hit() {
    if (playerStay === false && playerSum < 21) {
        randNum = Math.floor(Math.random() * deck.length);
        playerHand.push(deck[randNum]);
        playerArea.insertAdjacentHTML('beforeend', `<img src=${deck[randNum].getPicture()}>`);
        playerSum += deck[randNum].getValue();
        gameMessageArea.innerHTML = `total: ${playerSum}, CPU Sum: ${cpuHand[0].getValue()}`;
        discardPile.push(deck[randNum]);
        deck.splice(randNum, 1);
        if (playerSum > 21) {
            gameMessageArea.innerHTML = `Sorry you busted.`;
            playerStay = true;
            cpuStay = true;
        }
    } else if (playerSum > 21) {
        gameMessageArea.innerHTML = `Sorry you busted.`;
        playerStay = true;
        cpuStay = true;
    }
}

function stay() {
    playerStay = true;
    if (playerSum < playerSumA && playerSumA <= 21) {
        playerSum = playerSumA;
    }
    if (cpuStay === false) {
        computerHit();
    }
    cpuArea.innerHTML = `<img src=${cpuHand[0].getPicture()}> 
    <img src=${cpuHand[1].getPicture()}>`;
    cpuSum = cpuHand[0].getValue() + cpuHand[1].getValue();
    gameMessageArea.innerHTML = `total: ${playerSum}, CPU Sum: ${cpuSum}`;
}

function computerHit() {
    let interval = setInterval(() => {
        if (cpuSum < 17) {
            randNum = Math.floor(Math.random() * deck.length);
            cpuHand.push(deck[randNum]);
            cpuArea.insertAdjacentHTML('beforeend', `<img src=${deck[randNum].getPicture()}>`);
            cpuSum += deck[randNum].getValue();
            gameMessageArea.innerHTML = `total: ${playerSum}, Dealer Sum: ${cpuSum}`;
            discardPile.push(deck[randNum]);
            deck.splice(randNum, 1);
        } else {
            checkForWinner();
            clearInterval(interval);
        }
    }, 1000);
}

function checkForInitalWinner() {
    if (cpuSum === 21 && playerSum === 21 || playerSumA === 21 && cpuSumA === 21) {
        gameMessageArea.innerHTML = `It's a tie!`;
        playerStay = true;
        cpuStay = true;
    } else if (cpuSum === 21 || cpuSumA === 21) {
        cpuArea.innerHTML = `<img src=${cpuHand[0].getPicture()}> 
    <img src=${cpuHand[1].getPicture()}>`;
        gameMessageArea.innerHTML = `The dealer wins with a blackjack.`;
        playerStay = true;
        cpuStay = true;
    } else if (playerSum === 21 || playerSumA === 21) {
        gameMessageArea.innerHTML = `Blackjack!! You won!`;
        playerStay = true;
        cpuStay = true;
    }
}

function checkForWinner() {
    if (cpuSum === 21 && playerSum === 21 || playerSumA === 21 && cpuSumA === 21) {
        gameMessageArea.innerHTML = `It's a tie! Both dealer and player have 21`;
    }
    else if (playerSum > 21) {
        gameMessageArea.innerHTML = `Sorry you busted`;
    } else if (cpuSum > 21 && playerSum < 21) {
        gameMessageArea.innerHTML = `Dealer busted! You won with: ${cpuSum}!`;
    } else if (cpuSum > playerSum) {
        gameMessageArea.innerHTML = `The dealer wins with: ${cpuSum}`;
    } else if (cpuSum < playerSum) {
        gameMessageArea.innerHTML = `Congratz! You won with: ${playerSum}!`;
    } else if (cpuSum >= 17 && playerSum === cpuSum) {
        gameMessageArea.innerHTML = `It's a tie! Both dealer and player had: ${playerSum}!`;
    }
}