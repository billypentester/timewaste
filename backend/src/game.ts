// Define the card ranks and suits
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

function createDeck() {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push({ rank: ranks[j], suit: suits[i] });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Deal the cards to the players
function dealCards(players) {
  let deck = shuffleDeck(createDeck());
  for (let i = 0; i < players.length; i++) {
    let hand = deck.splice(0, 3);
    let faceUp = deck.splice(0, 3);
    players[i].hand = hand;
    players[i].faceUp = faceUp;
  }
  return deck;
}


  
