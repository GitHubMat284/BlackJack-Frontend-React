# Blackjack Frontend

This project is a React-based frontend for a single-player Blackjack game. It is designed to work with a backend API that handles all game logic. The focus is on clean state management, clear UI flow, and a responsive user experience rather than client-side game logic. This proves our Blakjack app can be deployed from among many with a React-based frontend.

---

# Reference tutorial:
[![Blackjack Tutorial](https://img.youtube.com/vi/xjqTIzYkGdI/0.jpg)](https://www.youtube.com/watch?v=xjqTIzYkGdI)

---

## Project Structure

The codebase is organized into four main areas:

* **App.jsx**
  Handles overall game state, UI flow, and interaction between components and backend services.

* **components/**
  Reusable UI components responsible for rendering the game:

  * Game board and hands
  * Cards
  * Status display
  * Action buttons

* **services/**
  Contains API communication logic:

  * Handles all requests to the backend Blackjack API

* **helpers/**
  Shared utility functions such as API request handling and reusable logic

---

## Game Flow

1. Player enters a name and starts a new game
2. Two cards are dealt to both player and dealer
3. Player chooses to Hit or Stand
4. Dealer plays automatically after the player stands
5. Game ends with one of the following outcomes:

   * Player Win
   * Dealer Win
   * Bust (player or dealer)
   * Push (tie)

After completion, the UI resets automatically for a new round.

---

## Game Rules (Simplified Blackjack)

<img width="1366" height="955" alt="image" src="https://github.com/user-attachments/assets/996cf994-7a6d-4937-b407-cc460dd326e9" />

* Standard 52-card deck is used
* Number cards use face value
* Face cards (J, Q, K) are worth 10
* Aces count as 11 or 1 depending on best outcome
* Player aims to get as close to 21 as possible without going over
* Dealer must draw until reaching at least 17
* No betting, splitting, doubling, or multiplayer features included

---

## Key Features

* Full API-driven gameplay (no local game engine)
* Clear separation between UI, services, and helpers
* State-driven rendering for all game phases
* Loading and error handling for API requests
* Automatic reset after game completion
* Player-focused status indicators

---

## How to Run Locally

To run this project locally:

1. Install dependencies
   Run npm install in the project directory

2. Start the frontend
   Run npm run dev to launch the React app

3. Run the backend API
   Ensure the Blackjack backend service is running locally and accessible (update API base URL in helpers if needed)

4. Play the game
   Open the app in your browser, enter a name, start a game, and use Hit or Stand to play a full round

---
