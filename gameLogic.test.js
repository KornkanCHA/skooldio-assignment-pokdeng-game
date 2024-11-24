const { generateDeck, shuffleDeck, calculatePoint, findingWinner } = require("./gameLogic");

test("generate 52 cards", () => {
    expect(generateDeck().length).toBe(52);
});
 
test("shuffled deck must not be the same as original deck.", () => {
    const originalDeck = generateDeck();
    const shuffledDeck = shuffleDeck([...originalDeck]);

    let isSame = true;
    for (let i = 0; i < originalDeck.length; i++) {
        if (originalDeck[i] !== shuffledDeck[i]) {
            isSame = false;
            break;
        }
    }
    
    expect(isSame).toBe(false);
});

test("calculate points correctly", () => {
    expect(calculatePoint(['Clubs-Ace', 'Hearts-2'])).toBe(3);
    expect(calculatePoint(['Hearts-9', 'Spades-9'])).toBe(8);
    expect(calculatePoint(['Diamonds-Jack', 'Hearts-Jack'])).toBe(0);
});

test("finding winner and return changed chip correctly", () => {
    expect(findingWinner(1, 2, 10)).toBe(-10);
    expect(findingWinner(1, 1, 10)).toBe(0);
    expect(findingWinner(2, 1, 10)).toBe(10);
});