import { createListenerMiddleware } from "@reduxjs/toolkit";
import { PLAYER_CACHE_KEY } from "../slices/gameSlice";
import { GameState } from "@/types/GameState";

const cacheMiddleware = createListenerMiddleware();

cacheMiddleware.startListening({
  predicate: () => true,
  effect: (_, api) => {
    const newState = api.getState() as { game: GameState };
    localStorage.setItem(PLAYER_CACHE_KEY, JSON.stringify(newState.game));
  },
});

export default cacheMiddleware;
