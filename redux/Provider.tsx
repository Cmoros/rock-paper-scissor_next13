"use client";

import { useEffect, useState } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { init } from "./slices/cacheSlice";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isInit, setInit] = useState(false);
  const { player } = store.getState().cache;
  const pathname = window?.location?.pathname;

  useEffect(() => {
    store.dispatch(init());
    setInit(true);
  }, [router]);

  useEffect(() => {
    if (!isInit) return;
    if (pathname === "/game") {
      if (!player) {
        router.replace("/");
      }
    } else {
      if (player) {
        router.replace("/game");
      }
    }
  }, [isInit, router, player, pathname]);

  return <Provider store={store}>{children}</Provider>;
}
