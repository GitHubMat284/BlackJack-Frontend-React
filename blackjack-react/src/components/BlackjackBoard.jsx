import GameStatus from "./GameStatus";
import Hand from "./Hand";

export default function BlackjackBoard({player : playerName, game}) {
  const playerCards = game.PlayerCards ?? [];
  const dealerCards = game.DealerCards ?? [];

  const calculateHandValue = (cards) => {
    let total = cards.reduce((sum, c) => sum + (c.Value || 0), 0);
    let aceCount = cards.filter(c => c.Rank === "Ace").length;

    while (total > 21 && aceCount > 0) {
      total -= 10;
      aceCount--;
    }

    return total;
  };
  const playerTotal = calculateHandValue(playerCards);
  const dealerTotal = calculateHandValue(dealerCards);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Hand title={playerName} cards={playerCards} total={playerTotal} />
        <Hand title="Dealer" cards={dealerCards} total={dealerTotal} />
      </div>
    </div>
  );
}