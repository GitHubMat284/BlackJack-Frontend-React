import { useState } from "react";
import GameBoard from "./components/BlackjackBoard";
import ControlButtons from "./components/ControlButtons";
import GameService from "./services/blackjackService";

function App() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [gameID, setGameID] = useState(null);
  const gameRunning = game && game?.Status === "PlayerTurn";

  const executeGameAction = async (action) => {
    try {
      setLoading(true);
      setError("");

      const res = await action();

      if (!res) {
        throw new Error("No response from server");
      }

      setGame(res);
    } catch (err) {
      setError(err.message || "API request failed");
    } finally {
      setLoading(false);
    }
  };

  const startGame = async () => {
    const nameNormalized = playerName.trim() || "Player";

    await executeGameAction(() =>
      GameService.startGame(nameNormalized)
    );
  };

  const hit = async () => {
    await executeGameAction(() =>
      GameService.hit(game.gameID)
    );
  };

  const stand = async () => {
    await executeGameAction(() =>
      GameService.stand(game.gameID)
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-black p-6">
      <div className="casino-table">
        <div className="flex flex-col items-center">
          <h1 className="casino-title mb-8 gold-ring">
            Blackjack by Matheo
          </h1>

          {!game ? (
            <form className="w-full max-w-sm mx-auto flex justify-center">
              <div className="casino-bar gold-ring">
                <input
                  className="appearance-none bg-transparent border-none w-full text-white placeholder-yellow-200/50 leading-tight focus:outline-none px-2"
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
          <div className="w-full max-w-4xl flex flex-col items-center gap-6">
            {!loading && gameRunning && (
              <ControlButtons
                status={game.status}
                onHit={hit}
                onStand={stand}                
              />
            )}
            <GameBoard game={game} loading={loading} error={error} />

          </div>
          )}
        </div>

        <footer
          className="absolute bottom-4 left-5 text-xs font-sans tracking-wide select-none pointer-events-none"
          style={{ color: "#a3a3a3" }}
        >
          Matheo 2026 © It worked on my machine!
        </footer>

      </div>
    </div>
  );
}

export default App;