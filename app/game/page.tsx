import React from "react";
import GameTitle from "@/components/GameTitle";
import Choices from "@/components/Choices";
import GameBoard from "@/components/GameBoard";
import Result from "@/components/Result";

type Props = {};

const Game = (props: Props) => {
  return (
    <div>
      <GameTitle />
      <GameBoard />
      <Result />
    </div>
  );
};

export default Game;
