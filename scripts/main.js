const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay');
const cpuArea = document.querySelector('.cpu-area');
const gameMessageArea = document.querySelector('.game-messages');
const playerArea = document.querySelector('.player-area');
const newGameButton = document.querySelector('#new-game');

newGameButton.addEventListener('click', newGame);
hitButton.addEventListener('click', hit);

class Card {
    constructor(suit, value, picture) {
        this.suit = suit;
        this.value = value;
    }
}

let deck = [];
let discardPile = [];
let playerHand = [];
let cpuHand = [];

createHearts();
createSpades();
createDiamonds();
createClubs();

initialDeal();
console.log('player hand: ', playerHand);
console.log('cpu hand: ', cpuHand);
console.log('discard pile: ', discardPile);
console.log('deck: ', deck);

//if card.value = 1 then value = 1 or 11?

//13 cards per suit
function createHearts() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Hearts', i + 1));
        } else {
            deck.push(new Card('Hearts', 10));
        }
    }
}

function createSpades() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Spades', i + 1));
        } else {
            deck.push(new Card('Spades', 10));
        }
    }
}

function createDiamonds() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Diamonds', i + 1));
        } else {
            deck.push(new Card('Diamonds', 10));
        }
    }
}

function createClubs() {
    for (let i = 0; i < 13; i++) {
        if (i < 10) {
            deck.push(new Card('Clubs', i + 1));
        } else {
            deck.push(new Card('Clubs', 10));
        }
    }
}

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
    }
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

    console.log('player hand: ', playerHand);
    console.log('cpu hand: ', cpuHand);
    console.log('discard pile: ', discardPile);
    console.log('deck: ', deck);
}

function hit() {
    randNum = Math.floor(Math.random() * deck.length);
    playerHand.push(deck[randNum]);
    discardPile.push(deck[randNum]);
    deck.splice(randNum, 1);
    console.log('player hand: ', playerHand);
    console.log('discard pile: ', discardPile);
    console.log('deck: ', deck);
}
