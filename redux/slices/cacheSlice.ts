import { rockPaperScissors } from "@/lib/rockPaperScissors";
import { Hand, Winner, hands } from "@/types/Hand";
import { HistorySerialized } from "@/types/History";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
    if (!cachedString) throw new Error("No user found");
    const cached: CacheState = JSON.parse(cachedString);
    return cached;
  } catch (e: unknown) {
    console.info((e as Error).message);
    return { ...defaultState };
  }
};

const initialState: CacheState = defaultState;

type InitialState = typeof initialState;

export const translate: Record<number, Winner> = {
  0: "draw",
  1: "player",
  2: "rival",
};

const resetPlay = (state: CacheState) => {
  state.hand = undefined;
  state.rivalHand = undefined;
  state.winner = undefined;
};

export const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<InitialState["player"]>) => {
      resetPlay(state);
      state.player = action.payload;
      state.allPlayers[state.player] ??= {
        player: state.player,
        histories: [],
      };
    },
    logout: (state) => {
      resetPlay(state);
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
      state.allPlayers = { ...allPlayers };
      if (player) {
        state.allPlayers[player] ??= {
          player: state.player,
          histories: [],
        };
      }
      state.player = player;
    },
    play: (state, { payload: hand }: PayloadAction<Hand>) => {
      const rivalHand = hands[Math.floor(Math.random() * 3)];
      state.hand = hand;
      state.rivalHand = rivalHand;
      const winnerNumber = rockPaperScissors(hand, rivalHand);
      const winner = translate[winnerNumber];
      state.winner = winner;
      const history: HistorySerialized = {
        hand,
        rivalHand,
        winner,
        time: new Date().toDateString(),
        id: uuidv4(),
      };
      const { player } = state;
      state.allPlayers[player].histories.push(history);
    },
    newGame: (state) => {
      resetPlay(state);
    },
  },
});

export const { newGame, addHistory, clearHistory, logout, signin, init, play } =
  cacheSlice.actions;

export default cacheSlice;

export const { reducer: cacheReducers } = cacheSlice;
