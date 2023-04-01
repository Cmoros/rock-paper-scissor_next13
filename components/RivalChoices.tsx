"use client";

import React from "react";
import Card from "./Card";
import { hands } from "@/types/Hand";

type Props = {};

const RivalChoices = ({}: Props) => {
  return (
    <div>
      <h2 className="pt-5 pb-2 text-center text-lg">Rival Choices</h2>
      <ul className="flex items-center justify-center gap-2 p-5">
        {hands.map((hand) => (
          <li key={hand}>
            <Card hand={hand} tiny rival />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RivalChoices;
