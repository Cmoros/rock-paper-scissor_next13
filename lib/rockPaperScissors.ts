import { Hand } from "@/types/Hand";

const evaluacion = {
  rock: {
    paper: 2,
    scissors: 1,
  },
  paper: {
    scissors: 2,
  },
  scissors: {},
} as Record<Hand, Record<Hand, number>>;

export function rockPaperScissors(jugada1: Hand, jugada2: Hand) {
  if (jugada1 === jugada2) return 0;
  return evaluacion[jugada1][jugada2] ?? (evaluacion[jugada2][jugada1] % 2) + 1;
}
