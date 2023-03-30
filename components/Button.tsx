import clsx from "clsx";
import React, { ReactNode } from "react";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        "title--bgc cursor-pointer self-end rounded-md py-2 px-6 text-xl text-black shadow-md  shadow-black transition duration-200 hover:scale-105",
        props.className
      )}
    />
  );
};

export default Button;
