import React from "react";
import GameTitle from "@/components/GameTitle";
import GameBoard from "@/components/GameBoard";
import Result from "@/components/Result";
import Histories from "@/components/Histories";
import ButtonPanel from "@/components/ButtonPanel";

type Props = {};

const Game = ({}: Props) => {
  return (
    <>
      <div
        className={`bgc2 m-auto max-h-90 min-h-400 min-w-70 max-w-90 rounded-md p-10 text-center shadow-2xl shadow-black`}>
        <div>
          <GameTitle />
          <GameBoard />
          <Result />
        </div>
      </div>
      <div
        className={`bgc2  m-auto h-60 w-10/12 min-w-70 max-w-7xl rounded-md p-5 text-center shadow-2xl shadow-black`}>
        <Histories />
      </div>
      <ButtonPanel />
    </>
  );
};

export default Game;
