"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { newGame } from "@/redux/slices/gameSlice";
import React, { useCallback } from "react";

type Props = {};

const messages = {
  draw: () => "This has been a DRAW",
  player: (player: string) => `${player} has WON`,
  rival: () => "The rival has WON",
};

const Result = ({}: Props) => {
  const dispatch = useAppDispatch();
  const { winner, player } = useAppSelector(({ game: { winner, player } }) => ({
    winner,
    player,
  }));
  const handlePlayAgain = useCallback(() => {
    dispatch(newGame());
  }, [dispatch]);
  if (!winner) return null;
  const message = messages[winner](player);

  return (
    <div>
      <h3 className="p-5 text-center text-2xl">{message}</h3>
      <button
        onClick={handlePlayAgain}
        className="title--bgc animate-pulse cursor-pointer self-end rounded-md py-2 px-8 text-xl text-black shadow-md  shadow-black transition duration-200 hover:scale-105 hover:animate-none hover:shadow-none">
        Play Again!
      </button>
    </div>
  );
};

export default Result;
