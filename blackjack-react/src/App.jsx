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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-black p-6">
      <div className="casino-table">
        <h1 className="casino-title mb-8">
          Blackjack by Matheo
        </h1>

        {!game ? (
          <form className="w-full max-w-sm mx-auto flex justify-center">
            <div className="casino-bar">
              <input
                className="appearance-none bg-transparent border-none w-full text-yellow-100 placeholder-yellow-200/50 leading-tight focus:outline-none px-2"
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />

              <button
                type="button"
                onClick={startGame}
                className="casino-btn flex-shrink-0 px-5 py-2 whitespace-nowrap"
              >
                Start Game
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full flex justify-center">
            <GameBoard game={game} />
            <div className="mt-auto pt-6">
              <ControlButtons
                status={game.status}
                onHit={hit}
                onStand={stand}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;