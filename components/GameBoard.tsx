import React from "react";
import Choices from "./Choices";
import AdversaryChoice from "./AdversaryChoice";

type Props = {};

const GameBoard = (props: Props) => {
  return (
    <div>
      <Choices />
      <AdversaryChoice />
    </div>
  );
};

export default GameBoard;
