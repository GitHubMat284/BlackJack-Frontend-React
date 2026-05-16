import api from "../helpers/apiCaller";

// Handles game related interactions with our API ignoring setup and state management 
class BlackjackService {
  startGame(playerName) {
    return api.post("/StartGame", { playerName });
  }

  hit(gameId) {
    return api.post("/PlayerHit", { gameId });
  }

  stand(gameId) {
    return api.post("/PlayerStand", { gameId });
  }
}

export default new BlackjackService();