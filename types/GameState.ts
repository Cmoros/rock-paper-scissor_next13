import { Hand, Winner } from "./Hand";
import { HistorySerialized } from "./History";

export type GameState = {
  player: string;
  rivalHand?: Hand;
  hand?: Hand;
  winner?: Winner;
  allPlayers: Record<
    string,
    { player: string; histories: HistorySerialized[] }
  >;
};
