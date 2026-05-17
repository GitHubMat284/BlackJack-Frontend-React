export default function BlackjackBoard({ game }) {
  const playerCards = game.PlayerCards ?? [];
  const dealerCards = game.DealerCards ?? [];

  const playerTotal = playerCards.reduce((a, c) => a + c.Value, 0);
  const dealerTotal = dealerCards.reduce((a, c) => a + c.Value, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <GameStatus status={game.Status} />

      <div className="flex justify-between mt-6 gap-6">
        <Hand title="Player" cards={playerCards} total={playerTotal} />
        <Hand title="Dealer" cards={dealerCards} total={dealerTotal} />
      </div>
    </div>
  );
}