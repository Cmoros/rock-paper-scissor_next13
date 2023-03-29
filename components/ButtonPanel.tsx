"use client";

import React, { useCallback } from "react";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { clearHistory, logout } from "@/redux/slices/cacheSlice";

type Props = {};

const ButtonPanel = (props: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isNotEmpty = useAppSelector(
    ({ cache: { player, allPlayers } }) =>
      allPlayers[player]?.histories?.length !== 0
  );
  const handleGoBack = useCallback(() => {
    dispatch(logout());
    router.replace("/");
  }, [router, dispatch]);
  const handleClear = useCallback(() => {
    dispatch(clearHistory());
  }, [dispatch]);
  return (
    <div className="flex gap-10">
      <Button onClick={handleGoBack}>Go back</Button>
      {isNotEmpty && <Button onClick={handleClear}>Clear History</Button>}
    </div>
  );
};

export default ButtonPanel;
