import React from "react";
import { IProps } from "./interface/IProps";

const Button = ({ name, label }: IProps) => {
  return (
    <button
      key={name}
      className={`btn ${name === "all" ? "btn-info" : `${name}`}`}
    >
      {label}
    </button>
  );
};

export default Button;
