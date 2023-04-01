import React from "react";
import Card from "./Card";
import { hands } from "@/types/Hand";

type Props = {};

const Choices = ({}: Props) => {
  return (
    <div>
      <h2 className="p-5 text-center text-xl">Make your choice</h2>
      <ul className="flex items-center justify-center gap-5 p-5">
        {hands.map((hand) => (
          <li key={hand}>
            <Card hand={hand} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Choices;
