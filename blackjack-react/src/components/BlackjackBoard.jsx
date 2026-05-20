import GameStatus from "./GameStatus";
import Hand from "./Hand";

export default function BlackjackBoard({ player: playerName, game, error }) {
  const playerCards = game.PlayerCards ?? [];
  const dealerCards = game.DealerCards ?? [];

  // Helper to calculate score, automatically adjusting Aces from 11 to 1 if over 21 (Same as SERVER logic)
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
    <div className="max-w-4xl mx-auto w-full">
      {error && (
        <div className="bg-red-900/80 border border-red-500 text-red-100 px-4 py-3 rounded-lg mb-4 text-center font-semibold shadow-lg animate-fade-in">
          ⚠️ {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-5 sm:gap-6 mt-4 sm:mt-6">
        <Hand title={playerName} cards={playerCards} total={playerTotal} />
        <Hand title="Dealer" cards={dealerCards} total={dealerTotal} />
      </div>
    </div>
  );
}