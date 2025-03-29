let deck = []
let suits = ['hearts', 'diamonds', 'spades', 'clubs']
let ranks = ['ace', 2,3,4,5,6,7,8,9,10, 'jack', 'queen', 'king']

for (let r = 0; r < ranks.length; r++) {
    for (let s = 0; s < suits.length; s++) {
        deck.push({rank: ranks[r], suit: suits[s]});
    }
}

console.log(deck)

deck.splice(Math.floor(Math.random() * 53), 1)
deck.splice(Math.floor(Math.random() * 52), 1)
console.log(deck)