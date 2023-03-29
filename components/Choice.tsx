import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Choice = ({ children }: Props) => {
  return <p className=" text-4xl ">{children}</p>;
};

export default Choice;
