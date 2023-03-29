"use client";

import { Hand } from "@/types/Hand";
import React from "react";
import Choice from "./Choice";
import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
  tiny?: boolean;
  hand: Hand;
  didWon: 0 | 1 | 2;
};

const hands = {
  rock: <Choice tiny>✊🏼</Choice>,
  paper: <Choice tiny>✋🏼</Choice>,
  scissors: <Choice tiny>✌🏼</Choice>,
};

const translateWon = {
  0: "bg-yellow-400",
  1: "bg-green-400",
  2: "bg-red-400",
};

const TinyCard = ({ hand, didWon }: Props) => {
  return (
    <div
      className={clsx(
        "flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-2 border-solid border-gray-500 shadow-sm shadow-black transition-all hover:border-white",
        translateWon[didWon]
      )}>
      {hands[hand]}
    </div>
  );
};

export default TinyCard;
