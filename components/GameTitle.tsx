"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";

type Props = {};

const GameTitle = ({}: Props) => {
  const player = useAppSelector(({ game: cache }) => {
    const { player } = cache;
    return cache.allPlayers[player];
  });
  if (!player) return <h2>Loading...</h2>;
  return (
    <h1>
      Welcome{player.histories.length > 0 && " back,"} {player.player}
    </h1>
  );
};

export default GameTitle;
