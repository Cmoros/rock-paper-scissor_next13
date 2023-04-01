import React from "react";
import Choices from "./Choices";
import RivalChoices from "./RivalChoices";

type Props = {};

const GameBoard = ({}: Props) => {
  return (
    <div>
      <Choices />
      <RivalChoices />
    </div>
  );
};

export default GameBoard;
