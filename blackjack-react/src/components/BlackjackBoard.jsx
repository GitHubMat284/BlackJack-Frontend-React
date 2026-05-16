import GameStatus from "./GameStatus";
import Hand from "./Hand";

export default function BlackjackBoard({ game }) {
  const playerTotal = game.playerCards.reduce((a, c) => a + c.value, 0);
  const dealerTotal = game.dealerCards.reduce((a, c) => a + c.value, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <GameStatus status={game.status}/>

      <div className="flex justify-between mt-6 gap-6">
        <Hand title="Player" cards={game.playerCards} total={playerTotal} />
        <Hand title="Dealer" cards={game.dealerCards} total={dealerTotal} />
      </div>
    </div>
  );
}