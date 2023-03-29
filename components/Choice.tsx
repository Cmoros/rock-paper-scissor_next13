import clsx from "clsx";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tiny?: boolean;
};

const Choice = ({ children, tiny }: Props) => {
  return <p className={clsx(tiny ? "text-xl" : "text-4xl")}>{children}</p>;
};

export default Choice;
