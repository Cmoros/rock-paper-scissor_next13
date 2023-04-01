import { Hand } from "@/types/Hand";

const evaluation = {
  rock: {
    paper: 2,
    scissors: 1,
  },
  paper: {
    scissors: 2,
  },
  scissors: {},
} as Record<Hand, Record<Hand, number>>;

export function rockPaperScissors(play1: Hand, play2: Hand) {
  if (play1 === play2) return 0;
  return (evaluation[play1][play2] ?? (evaluation[play2][play1] % 2) + 1) as
    | 0
    | 1
    | 2;
}
