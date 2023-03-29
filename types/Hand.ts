export const hands: ["rock", "paper", "scissors"] = [
  "rock",
  "paper",
  "scissors",
];

export const winners: ["draw", "player", "rival"] = ["draw", "player", "rival"];

export type Hand = (typeof hands)[number];

export type Winner = (typeof winners)[number];
