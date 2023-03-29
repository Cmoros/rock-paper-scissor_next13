import { rockPaperScissors } from "@/lib/rockPaperScissors";
import { Hand, Winner, hands } from "@/types/Hand";
import { HistorySerialized } from "@/types/History";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CacheState = {
  player: string;
  rivalHand?: Hand;
  hand?: Hand;
  winner?: Winner;
  allPlayers: Record<
    string,
    { player: string; histories: HistorySerialized[] }
  >;
};

export const PLAYER_CACHE_KEY = "rock-paper-scissors";

const defaultState: CacheState = {
  player: "",
  allPlayers: {},
};

const getInitialState = () => {
  const cachedString = localStorage.getItem(PLAYER_CACHE_KEY);
  try {
    if (!cachedString) throw new Error();
    const cached: CacheState = JSON.parse(cachedString);
    return cached;
  } catch (e: unknown) {
    return defaultState;
  }
};

const initialState: CacheState = defaultState;

type InitialState = typeof initialState;

export const translate: Record<number, Winner> = {
  0: "draw",
  1: "player",
  2: "rival",
};

export const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<InitialState["player"]>) => {
      state.player = action.payload;
      state.allPlayers[state.player] ??= {
        player: state.player,
        histories: [],
      };
    },
    logout: (state) => {
      state.player = "";
    },
    addHistory: (state, action: PayloadAction<HistorySerialized>) => {
      const { player } = state;
      state.allPlayers[player].histories.push(action.payload);
    },
    clearHistory: (state) => {
      const { player } = state;
      state.allPlayers[player].histories = [];
    },
    init: (state) => {
      const { allPlayers, player } = getInitialState();
      state.allPlayers = allPlayers;
      state.player = player;
    },
    play: (state, action: PayloadAction<Hand>) => {
      state.hand = action.payload;
      state.rivalHand = hands[Math.floor(Math.random() * 3)];
      const winnerNumber = rockPaperScissors(action.payload, state.rivalHand);
      state.winner = translate[winnerNumber];
    },
    newGame: (state) => {
      state.hand = undefined;
      state.rivalHand = undefined;
      state.winner = undefined;
    },
  },
});

export const { newGame, addHistory, clearHistory, logout, signin, init, play } =
  cacheSlice.actions;

export default cacheSlice;

export const { reducer: cacheReducers } = cacheSlice;
