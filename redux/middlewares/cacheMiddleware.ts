import { createListenerMiddleware } from "@reduxjs/toolkit";
import { CacheState, addHistory } from "../slices/cacheSlice";
import { PLAYER_CACHE_KEY } from "../slices/cacheSlice";

const cacheMiddleware = createListenerMiddleware();

cacheMiddleware.startListening({
  // actionCreator: addHistory,
  predicate: () => true,
  effect: (_, api) => {
    const newState = api.getState() as { cache: CacheState };
    localStorage.setItem(PLAYER_CACHE_KEY, JSON.stringify(newState.cache));
  },
});

export default cacheMiddleware;
