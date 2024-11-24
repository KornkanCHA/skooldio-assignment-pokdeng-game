const { generateDeck, shuffleDeck, calculatePoint, findingWinner } = require("./gameLogic");
const ps = require("prompt-sync");

const prompt = ps({ sigint: true });

function startGame() {
    console.log("=".repeat(10) + "Pokdeng with Skooldio" + "=".repeat(10));
    let totalChips = 0;

    while (true) {
        const result = playGame();
        totalChips += result;
        console.log("You got total " + totalChips + " chips.");
        console.log("*".repeat(40));;
        const answer = prompt("Wanna play more? (Yes/No): ");
        if (answer.toLowerCase() !== "yes") {
            break;
        }
    };

    console.log("You finished with " + totalChips + " chips.");
    console.log("Bye!")
}

function playGame() {
    let bet;

    while (true) {
        bet = prompt("Please put your bet: ");
        if (!isNaN(bet) && +bet > 0) {
            bet = +bet;
            break;
        }
        console.log("Invalid bet. Please enter the number.");
    }

    console.log("-".repeat(40));

    const deck = shuffleDeck(generateDeck());
    const yourCards = [deck.pop(), deck.pop()];
    const skooldioCards = [deck.pop(), deck.pop()];
    const yourPoints = calculatePoint(yourCards);
    const skooldioPoints = calculatePoint(skooldioCards);

    console.log("You got " + yourCards.join(", "));
    console.log("You got " + yourPoints + " points.");
    console.log("-".repeat(40));
    console.log("Skooldio got " + skooldioCards.join(", "));
    console.log("Skooldio got " + skooldioPoints + " points.");
    console.log("*".repeat(40));

    const chipChange = findingWinner(yourPoints, skooldioPoints, bet);
    if (chipChange === bet) {
        console.log("You won!!!, received " + bet + " chips.");
    } else if (chipChange === -bet) {
        console.log("You lost, lost " + bet + " chips.");
    } else {
        console.log("It is a tie, your chips remain the same.");
    }

    return chipChange;
}

startGame();