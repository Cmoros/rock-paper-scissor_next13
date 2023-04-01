"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { play } from "@/redux/slices/gameSlice";
import { Hand, Winner } from "@/types/Hand";
import clsx from "clsx";
import React, { useCallback } from "react";
import Choice from "./Choice";

type Props = {
  children?: React.ReactNode;
  tiny?: boolean;
  rival?: boolean;
  hand: Hand;
};

const hands = {
  rock: <Choice>✊🏼</Choice>,
  paper: <Choice>✋🏼</Choice>,
  scissors: <Choice>✌🏼</Choice>,
};

const getClassNames = ({
  hand,
  playerHand,
  rivalHand,
  tiny,
  winner,
  rival,
}: Pick<Props, "hand" | "rival" | "tiny"> & {
  playerHand?: Hand;
  rivalHand?: Hand;
  winner?: Winner;
}): string => {
  if (!winner) return clsx(tiny ? "h-12 w-12" : "h-24 w-24", "accent1--bgc");
  const playedHand = rival ? rivalHand : playerHand;
  const won = winner === (rival ? "rival" : "player");
  if (winner === "draw" && hand === playedHand) "bg-yellow-400 h-24 w-24";
  if (hand !== playedHand) return "h-0 w-0";
  if (won) return "bg-green-500 h-24 w-24";
  return "bg-red-500 h-24 w-24";
};

const Card = ({ children, tiny, rival, hand }: Props) => {
  const dispatch = useAppDispatch();
  const {
    winner,
    hand: playerHand,
    rivalHand,
  } = useAppSelector(({ game: { hand, rivalHand, winner } }) => ({
    winner,
    hand,
    rivalHand,
  }));

  const handleChoose = useCallback(() => {
    dispatch(play(hand));
  }, [dispatch, hand]);

  return (
    <button
      onClick={handleChoose}
      className={clsx(
        "flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-md",
        "border-2 border-solid border-gray-500 shadow-sm shadow-black transition-all",
        winner || "hover:border-white hover:bg-gray-500",
        rival || "cursor-pointer",
        getClassNames({ hand, playerHand, rival, rivalHand, tiny, winner })
      )}
      disabled={rival || !!winner}>
      {(winner || !rival) && (children ?? hands[hand])}
    </button>
  );
};

export default Card;
