"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { play } from "@/redux/slices/cacheSlice";
import { Hand } from "@/types/Hand";
import clsx from "clsx";
import React from "react";

type Props = {
  children?: React.ReactNode;
  tiny?: boolean;
  rival?: boolean;
  hidden?: boolean;
  hand: Hand;
};

const Card = ({ children, tiny, rival, hidden, hand }: Props) => {
  const dispatch = useAppDispatch();
  const {
    winner,
    hand: playerHand,
    rivalHand,
  } = useAppSelector(({ cache: { hand, rivalHand, winner } }) => ({
    winner,
    hand,
    rivalHand,
  }));
  const handleChoose = () => {
    dispatch(play(hand));
  };

  return (
    <button
      onClick={handleChoose}
      className={clsx(
        "flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-md border-2 border-solid border-gray-500 shadow-sm shadow-black transition-all hover:border-white hover:bg-gray-500",

        rival || "cursor-pointer",
        !winner && clsx(tiny ? "h-12 w-12" : "h-24 w-24", "accent1--bgc"),
        winner &&
          (rival
            ? clsx(
                rivalHand === hand ? "h-24 w-24" : "h-0 w-0",
                winner === "rival" ? "bg-green-400" : "bg-red-400"
              )
            : clsx(
                playerHand === hand ? "h-24 w-24" : "h-0 w-0",
                winner === "player" ? "bg-green-400" : "bg-red-400"
              )),
        winner === "draw" && "bg-yellow-400"
      )}
      disabled={rival || !!winner}>
      {(winner || !rival) && children}
    </button>
  );
};

export default Card;
