import { Winner } from "@/types/Hand";
import { HistorySerialized } from "@/types/History";
import clsx from "clsx";
import React from "react";
import TinyCard from "./TinyCard";

type Props = Omit<HistorySerialized, "id">;

const messages: Record<
  Winner,
  {
    title: string;
    className: string;
    didWon: { player: 0 | 1 | 2; rival: 0 | 1 | 2 };
  }
> = {
  draw: {
    title: "DRAW",
    className: "text-yellow-400",
    didWon: { player: 0, rival: 0 },
  },
  rival: {
    title: "LOSS",
    className: "text-red-400",
    didWon: { player: 2, rival: 1 },
  },
  player: {
    title: "WIN",
    className: "text-green-400",
    didWon: { player: 1, rival: 2 },
  },
};

const History = ({ hand, rivalHand, winner }: Props) => {
  const { className, title } = messages[winner];
  return (
    <div className="flex h-full w-24 flex-col items-center justify-center gap-2 rounded-md border-2 border-solid border-gray-500 p-4 hover:border-white">
      <h3 className={clsx("text-lg", className)}>{title}</h3>
      <div className="m-auto flex h-full flex-col gap-0.5">
        <TinyCard hand={hand} didWon={messages[winner].didWon.player} />
        <p>vs</p>
        <TinyCard hand={rivalHand} didWon={messages[winner].didWon.rival} />
      </div>

      {/* <p>{time.slice(-1)}</p> */}
    </div>
  );
};

export default History;
