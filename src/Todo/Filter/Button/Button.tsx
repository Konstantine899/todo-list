import React, { FC } from "react";
import { IButtonProps } from "./interface/IButtonProps";
import { useTodos } from "../../../hooks/useTodos";

const Button: FC<IButtonProps> = ({ name, label }) => {
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
