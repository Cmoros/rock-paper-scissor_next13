"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import History from "./History";

type Props = {};

const Histories = ({}: Props) => {
  const histories = useAppSelector(
    ({ cache: { allPlayers, player } }) => allPlayers[player]?.histories
  );
  return (
    <div className="relative h-full overflow-auto pb-2">
      {!histories || histories.length === 0 ? (
        <p>No games yet</p>
      ) : (
        <>
          <ul className="flex h-full flex-row-reverse justify-end gap-4">
            {histories.map(({ hand, rivalHand, time, winner, id }) => (
              <li key={id} className="h-full">
                <History
                  hand={hand}
                  rivalHand={rivalHand}
                  time={time}
                  winner={winner}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Histories;
