class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

let deck = [];
let discardPile = [];

createHearts();
createSpades();
createDiamonds();
createClubs();
console.log(deck);

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


