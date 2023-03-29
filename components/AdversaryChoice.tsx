"use client";

import React from "react";
import Card from "./Card";
import { choices } from "./Choices";
import Choice from "./Choice";

type Props = {};

const AdversaryChoice = (props: Props) => {
  return (
    <div>
      <h2 className="pt-5 pb-2 text-center text-lg">Rival Choices</h2>
      <ul className="flex items-center justify-center gap-2 p-5">
        {choices.map(({ hand, label }) => (
          <li key={hand}>
            <Card hand={hand} tiny rival>
              <Choice>{label}</Choice>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdversaryChoice;
