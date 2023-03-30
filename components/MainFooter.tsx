import Link from "next/link";
import React from "react";
import { Linkedin, GitHub } from "react-feather";

type Props = {};

const MainFooter = ({}: Props) => {
  return (
    <footer className="sticky bottom-0 flex w-full items-center justify-center gap-4 bg-black p-2 text-xl sm:gap-6">
      <p className="text-2xl">©</p>
      <p>Made by Cesar Moros</p>
      <Link href="https://www.linkedin.com/in/cesar-moros/">
        <Linkedin />
      </Link>
      <Link href="https://github.com/Cmoros">
        <GitHub />
      </Link>
    </footer>
  );
};

export default MainFooter;
