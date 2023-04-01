"use client";

import { useAppDispatch } from "@/redux/hooks";
import { signin } from "@/redux/slices/gameSlice";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

type Props = {};

const PlayerForm = ({}: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
      console.error("e.target not form");
      return;
    }
    const nameInput = e.target[0];
    if (!(nameInput instanceof HTMLInputElement)) {
      console.error("Name input not input");
      return;
    }
    const { value } = nameInput;
    dispatch(signin(value));
    router.replace("/game");
  };
  return (
    <form
      action=""
      className="absolute left-0 h-full w-full  sm:top-1/4"
      onSubmit={handleSubmit}>
      <div className="m-auto flex max-w-5xl flex-col gap-10 p-10">
        <div className="flex flex-col gap-5 text-lg">
          <label htmlFor="player_name">Player Name</label>
          <input
            required
            type="text"
            id="player_name"
            className="accent2--bgc bgc1--c m-auto w-full min-w-0 max-w-md rounded-md py-1 px-2"
          />
        </div>
        <input
          type="submit"
          value="Play!"
          className="title--bgc animate-pulse cursor-pointer self-end rounded-md py-2 px-8 text-xl text-black shadow-md  shadow-black transition duration-200 hover:scale-105 hover:animate-none hover:shadow-none"
        />
      </div>
    </form>
  );
};

export default PlayerForm;
