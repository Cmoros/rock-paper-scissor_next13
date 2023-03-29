import React from "react";
import Card from "./Card";
import Choice from "./Choice";
import { Hand } from "@/types/Hand";

type Props = {};

export const choices: { label: string; hand: Hand }[] = [
  { label: "✊🏼", hand: "rock" },
  { label: "✋🏼", hand: "paper" },
  { label: "✌🏼", hand: "scissors" },
];

const Choices = (props: Props) => {
  return (
    <div>
      <h2 className="p-5 text-center text-xl">Make your choice</h2>
      <ul className="flex items-center justify-center gap-5 p-5">
        {choices.map(({ label, hand }) => (
          <li key={hand}>
            <Card hand={hand}>
              <Choice>{label}</Choice>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Choices;
