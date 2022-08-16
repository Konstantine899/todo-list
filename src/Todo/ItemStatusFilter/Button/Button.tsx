import React, { FC } from "react";
import { IProps } from "./interface/IProps";
import { useTodos } from "../../../hooks/useTodos";

const Button: FC<IProps> = ({ name, label }) => {
  const { filter, onFilter } = useTodos();

  const isActive = filter === name;
  const classActive = isActive ? "btn-info" : "btn-outline-secondary";

  return (
    <button
      key={name}
      className={`btn ${classActive}`}
      onClick={() => onFilter(name)}
    >
      {label}
    </button>
  );
};

export default Button;
