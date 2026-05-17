import GameStatus from "./GameStatus";
import Hand from "./Hand";

export default function BlackjackBoard({ game, loading, error }) {
  let displayStatus = game?.Status;
  if (loading) {
    displayStatus = "Processing...";
  }

  if (error) {
    displayStatus = error;
  }
  const playerCards = game.PlayerCards ?? [];
  const dealerCards = game.DealerCards ?? [];

  const playerTotal = playerCards.reduce((a, c) => a + c.Value, 0);
  const dealerTotal = dealerCards.reduce((a, c) => a + c.Value, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <GameStatus status={displayStatus} />

      <div className="grid grid-cols-2 gap-6 mt-6">
        <Hand title="Player" cards={playerCards} total={playerTotal} />
        <Hand title="Dealer" cards={dealerCards} total={dealerTotal} />
      </div>
    </div>
  );
}