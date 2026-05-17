import api from "../helpers/apiCaller";

// Handles game related interactions with our API ignoring setup and state management 
class BlackjackService {
  startGame(playerName) {
    return api.post("/api/StartGame", { playerName });
  }

  hit(gameId) {
    return api.post("/api/PlayerHit", { gameId });
  }

  stand(gameId) {
    return api.post("/api/PlayerStand", { gameId });
  }
}

export default new BlackjackService();