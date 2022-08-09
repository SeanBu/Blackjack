const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay');
const cpuArea = document.querySelector('.cpu-area');
const gameMessageArea = document.querySelector('.game-messages');
const playerArea = document.querySelector('.player-area');
const newGameButton = document.querySelector('#new-game');

let sum;

newGameButton.addEventListener('click', newGame);
hitButton.addEventListener('click', hit);

// class that all of our cards will use
class Card {
    constructor(suit, value, picture) {
        this.suit = suit;
        this.value = value;
        this.picture = picture
    }

    getValue() {
        //check if value is 1 and return an array of 1 and 11?
        return this.value;
    }

    getPicture() {
        return this.picture;
    }
}

let deck = []; // the deck of cards from which the player and cpu are drawing from
let discardPile = []; // the cards that have been already played
let playerHand = []; // the cards that the player currently holds
let cpuHand = []; // the cards that the cpu currently holds

newGame(); // sets up the game when the page is loaded and also makes a new game when the 'new game; button is pressed.

console.log('player hand: ', playerHand);
console.log('cpu hand: ', cpuHand);
console.log('discard pile: ', discardPile);
console.log('deck: ', deck);

//if card.value = 1 then value = 1 or 11?

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
    sum = 0;
    for (let i = 0; i <= 1; i++) {
        let randNum = Math.floor(Math.random() * deck.length);
        playerHand.push(deck[randNum]);
        discardPile.push(deck[randNum]);
        deck.splice(randNum, 1);
        randNum = Math.floor(Math.random() * deck.length);
        cpuHand.push(deck[randNum]);
        discardPile.push(deck[randNum]);
        deck.splice(randNum, 1);
        sum += playerHand[i].getValue();
    }
    // display the pictures of the cards based off of what is in the player and cpu hand
    playerArea.innerHTML = `<img src=${playerHand[0].getPicture()}> 
    <img src=${playerHand[1].getPicture()}>`;
    cpuArea.innerHTML = `<img src=${cpuHand[0].getPicture()}> 
    <img src=${cpuHand[1].getPicture()}>`;
    gameMessageArea.innerHTML = `total: ${sum}`;
}

function newGame() {
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
    if (sum < 20) {
        randNum = Math.floor(Math.random() * deck.length);
        playerHand.push(deck[randNum]);
        playerArea.insertAdjacentHTML('beforeend', `<img src=${deck[randNum].getPicture()}>`);
        sum += deck[randNum].getValue();
        gameMessageArea.innerHTML = `total: ${sum}`;
        discardPile.push(deck[randNum]);
        deck.splice(randNum, 1);
    }
}
