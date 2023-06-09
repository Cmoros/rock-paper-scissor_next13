"use client";

import { useEffect, useState } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { init } from "./slices/gameSlice";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [pathname, setPathname] = useState("");
  const { player } = store.getState().game;

  useEffect(() => {
    store.dispatch(init());
    setPathname(window.location.pathname);
  }, [router]);

  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/game") {
      if (!player) {
        router.replace("/");
      }
    } else {
      if (player) {
        router.replace("/game");
      }
    }
  }, [router, player, pathname]);

  return <Provider store={store}>{children}</Provider>;
}
