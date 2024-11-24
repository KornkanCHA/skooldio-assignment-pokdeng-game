function generateDeck() {
    const a = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const b = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack"];
    const deck = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            deck.push(a[i] + "-" + b[j]);
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5);
}

function calculatePoint(cards) {
    let totalPoints = 0
    for (let i = 0; i < cards.length; i++) {
        const value = cards[i].split("-")[1];
        if (value === "Ace") {
            totalPoints += 1;
        } else if (["King", "Queen", "Jack"].includes(value)) {
            totalPoints += 10;
        } else {
            totalPoints += +value;
        }
    }

    return totalPoints % 10;
}

function findingWinner(yourPoints, skooldioPoints, bet) {
    if (yourPoints > skooldioPoints) {
        return bet;
    } else if (yourPoints < skooldioPoints) {
        return -bet;
    } else {
        return 0;
    }
}

module.exports = {
    generateDeck,
    shuffleDeck,
    calculatePoint,
    findingWinner
};