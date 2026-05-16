import { useState } from "react";
import GameBoard from "./components/BlackjackBoard";
import Controls from "./components/ControlButtons";
import GameService from "./services/blackjackService";

function App() {
  const [game, setGame] = useState(null);
  const [playerName, setPlayerName] = useState("");

  const startGame = async () => {
    const nameNormalized = playerName.trim() || "Player";
    const res = await GameService.startGame(nameNormalized);
    setGame(res);
  };

  const hit = async () => {
    const res = await GameService.hit(game.gameID);
    setGame(res);
  };

  const stand = async () => {
    const res = await GameService.stand(game.gameID);
    setGame(res);
  };

  return (
    <div className="min-h-screen bg-emerald-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Blackjack
      </h1>

      {!game ? (
        <div className="text-center">
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="px-3 py-2 rounded text-black"
          />
          <button onClick={startGame} className="bg-green-600 px-4 py-2 rounded">
            Start Game
          </button>
        </div>
      ) : (
        <>
          <GameBoard game={game} />

          <ControlButtons
            status={game.status}
            onHit={hit}
            onStand={stand}
          />
        </>
      )}
    </div>
  );
}

export default App;