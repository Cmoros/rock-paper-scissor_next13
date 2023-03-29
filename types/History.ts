export interface History {
  time: Date;
  winner: string;
}

export type HistorySerialized = Omit<History, "time"> & { time: string };
