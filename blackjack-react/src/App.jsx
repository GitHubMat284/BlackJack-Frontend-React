import { useState, useEffect } from "react";
import BlackjackBoard from "./components/BlackjackBoard";
import ControlButtons from "./components/ControlButtons";
import GameService from "./services/blackjackService";
import GameStatus from "./components/GameStatus";
import MoreInfoModal from "./components/MoreInfoModal";
import { FUNNY_LOADING_TEXTS } from "./constants/LoadingTexts";

function App() {
  // Main game state
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  // Derived state to make rendering logic cleaner later on
  const gameRunning = game && game?.Status === "PlayerTurn";
  const isGameOver = game && game.Status !== "PlayerTurn" && game.Status !== "DealerTurn";

  // Auto-reset the board 3 seconds after a game finishes so the user
  // has time to read results & get back to the start screen automatically
  useEffect(() => {
    if (!game) return;

    const isGameOver =
      game.Status !== "PlayerTurn" &&
      game.Status !== "DealerTurn";

    if (isGameOver) {
      const randomIndex = Math.floor(Math.random() * FUNNY_LOADING_TEXTS.length);
      setLoadingText(FUNNY_LOADING_TEXTS[randomIndex]);
      const timer = setTimeout(() => {
        setGame(null);
        setError("");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [game]);

  // Reusable wrapper for API calls to handle loading states 
  // and error catching consistently across all actions
  const executeGameAction = async (action) => {
    try {
      setLoading(true);
      setError("");

      const res = await action();

      if (!res) {
        throw new Error("No response from server. Please contact Matheo!");
      }

      setGame(res);
    } catch (err) {
      setError(err.message || "API request failed. Please contact Matheo!");
    } finally {
      setLoading(false);
    }
  };

  // Clean up user input to prevent weird names or empty strings
  const normalizeName = (name) => {
    return (name || "")
      .trim()
      .slice(0, 16) || "Player";
  };

  // Game action handlers
  const startGame = async () => {
    const name = normalizeName(playerName);
    setPlayerName(name);

    await executeGameAction(() =>
      GameService.startGame(name)
    );
  };

  const hit = async () => {
    await executeGameAction(() =>
      GameService.hit(game.GameID)
    );
  };

  const stand = async () => {
    await executeGameAction(() =>
      GameService.stand(game.GameID)
    );
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-black p-6">
        <div className="casino-table relative pt-12 sm:pt-6">
          
          {/* Info Button: Fixed to screen corner on mobile, absolute to table on larger screens */}
          <div className="fixed top-4 left-4 sm:absolute sm:top-5 sm:left-5 z-50">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full gold-ring bg-transparent text-yellow-300 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-yellow-500/10 hover:border-yellow-400/50 active:scale-95"
              aria-label="Open project information"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Main Content: Uses zoom to scale up the entire UI on larger screens */}
          <div className="flex flex-col items-center lg:[zoom:1.33]">
            <h1 className="casino-title mb-8 gold-ring text-center">
              Blackjack by Matheo
            </h1>
      
            {/* Conditional Render: Show name input form if no game is running, otherwise show game */}
            {!game ? (
              <form className="w-full max-w-sm mx-auto flex justify-center">
                <div className="casino-bar gold-ring flex flex-col sm:flex-row items-center gap-3 sm:gap-0 w-full">
                  <input
                    maxLength={16}
                    className="appearance-none bg-transparent border-none w-full text-center sm:text-left text-white font-semibold placeholder-yellow-200/50 leading-tight focus:outline-none px-2"
                    type="text"
                    placeholder="Enter your name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                  />
                  <button
                    type="button"
                    disabled={loading}
                    onClick={startGame}
                    className="casino-btn flex-shrink-0 px-5 py-2 whitespace-nowrap"
                  >
                    Start Game
                  </button>
                </div>
              </form>
            ) : (
              <div className="w-full max-w-4xl flex flex-col items-center gap-5 pb-10 sm:pb-10">
                <GameStatus status={game?.Status} />
                <BlackjackBoard
                  player={playerName}
                  game={game}
                  loading={loading}
                  error={error}
                />
                
                {!loading && gameRunning && (
                  <ControlButtons
                    onHit={hit}
                    onStand={stand}
                  />
                )}

                {isGameOver && (
                  <div className="flex items-center gap-3 bg-black/40 px-5 py-2 rounded-full mt-2 gold-ring animate-pulse">
                    <svg className="animate-spin h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-yellow-200 font-semibold tracking-wide">{loadingText}</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <footer
            className="absolute bottom-3 left-3 text-xs sm:text-sm lg:text-base font-sans tracking-wide select-none pointer-events-none"
            style={{ color: "#a3a3a3" }}
          >
            Matheo 2026 © It worked on my machine!
          </footer>
        </div>
      </div>
      
      <MoreInfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default App;