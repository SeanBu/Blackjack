# Sean Buchas | SEI Project 1 | Blackjack
---

## Game Description - BlackJack
---
The goal of blackjack is to get as close to 21 points without going over and at the same time have more points than the dealer. The value of the cards are their face value with the exception of Jacks, Queens, Kings and Aces. Jacks, Kings, and Queens count at 10 points while Aces count as 1 or 11 points. At the start of the game the player and the dealer each get delt 2 cards 1 at a time. Everyone can see the players card but only the first card of the dealer is revealed. The player can then choose to hit or stay. If they choose hit then they get dealt another card. They can continue to hit if the total of their cards remain under 21. Once a player hits stay the dealer will be delt card until they reach atleast 17 points. The dealer gets delt cards 1 at a time with 1 second in between cards so they don't all just appear at once. This makes the game a little more realistic. Once the dealer reaches 17 or more points they stop getting cards and whoever has the most points between the player and the dealer wins the game. The player can then press the new game button to start a new game.

The game also checks for natural blackjacks. A natural blackjack is when the player or dealer gets delt a card with a value of 10 and an ace. That combination of cards adds up to 21. If the dealer gets delt a blackjack and the player does not get delt a black jack the game ends automatically, the dealers hidden card gets revealed, and the dealer wins.

## Technologies Used
---
**HTML** was used to create the containers to allow me to display my game objects as well as allow javascript to interact with the main page. The HTML document consists mostly of `<div>` elements that contain classes which allow me to access them in my css file as well as my javascript file.

**CSS** was used to style the game. I used a grid to layout the page how I wanted. The main play area that contains the buttons, cards, and updated score are all in the same column and take up 4 different rows. The content is aligned in the center of that column with Flexbox. I used the different font properites avaliable to get the glowing neon look. I used google fonts to bring in a font I liked.

**Javascript** was used for all of the game logic. All of the cards are based off a Card class. The cards the player and dealer play with are stored in a Deck array. I have 4 functions to populate the deck array with objects from the Card class. One function for each suit of card. The objects contain the card suit, card value, and a picture of the card. The objects also contain functions to get the picture and to get the value of the card. The player and dealer hands are both stores as seperate arrays which remove cards randomly from the deck array as they get delt out. I manipulated the DOM in order to let me display the cards, player and dealer scores, and as well add logic to the buttons.

## Screenshots

![Start of Game](https://i.imgur.com/B6RMCfH.png)
This is how the start of the game looks when you first load in as well as after you hit new game.
![Dealer Wins](https://i.imgur.com/F4S4FOA.png)
This is what it looks like when the dealer wins.
![Player Wins](https://i.imgur.com/NNOnNZo.png)
This is what it looks like when the player wins.
![Player Natural Blackjack](https://i.imgur.com/461wJga.png)
This is what it looks like when the player gets delt a natural black jack.
![Dealer Natural Blackjack](https://i.imgur.com/6nIkMwm.png)
This is what it looks like when the dealer gets delt a natual black jack.
![Tie](https://i.imgur.com/IgHNASC.png)
This is what happens when both the dealer and player tie.




## Link to The Game
---
https://seanbu.github.io/Blackjack/

## Next Steps
---
There are some features I would like to still add to the game. I would like to add a wager system where the player can wager fake money and if they win they get a set amount back based off of what they wagered. I would also like to add some animations to the game. More specifically I would like to add animations for when cards get delt out aswell as when the dealers hidden card gets flipped over and revealed.

There are some bugs I would also like to fix. If the user hits the stay button and then hits the new game button before the dealer finishes their turn it will start a new game but the dealer will still be getting delt cards. Also I need to make it so aces count as 1 or 11 for the dealer aswell. Right now they only count as 1 for the dealer. For the player aces work correctly and count as 1 or 11.
