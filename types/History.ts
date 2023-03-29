import { Hand, Winner } from "./Hand";

export interface History {
  time: Date;
  winner: Winner;
  hand: Hand;
  rivalHand: Hand;
  id: string;
}

export type HistorySerialized = Omit<History, "time"> & { time: string };
