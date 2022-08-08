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
// creates 13 instances of the Card class and adds them to an array called Deck
// asigns a suit, value of the card (im black jack vaules are 1-10 and the ace is either 1 or 11)
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
    playerArea.innerHTML = `<img src=${playerHand[0].getPicture()}> 
    <img src=${playerHand[1].getPicture()}>`;
    gameMessageArea.innerHTML = `total: ${playerHand[0].getValue() + playerHand[1].getValue()}`;
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
    randNum = Math.floor(Math.random() * deck.length);
    playerHand.push(deck[randNum]);
    playerArea.insertAdjacentHTML('beforeend', `<img src=${deck[randNum].getPicture()}>`);
    let sum = 0;
    for (let i = 0; i < playerHand.length; i++) {
        sum += playerHand[i].getValue();
    }
    gameMessageArea.innerHTML = `total: ${sum}`;
    discardPile.push(deck[randNum]);
    deck.splice(randNum, 1);
}
