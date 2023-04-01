import { configureStore } from "@reduxjs/toolkit";
import cacheMiddleware from "./middlewares/cacheMiddleware";
import { gameReducers } from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducers,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(cacheMiddleware.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
