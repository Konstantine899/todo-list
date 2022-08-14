import React, { FC } from "react";
import { IButtonDeleteProps } from "./interfaces/IButtonDeleteProps";

const ButtonDelete: FC<IButtonDeleteProps> = ({ todo, deleteItem }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-danger btn-sm float-right"
      onClick={() => deleteItem(todo.id)}
    >
      <i className="fa fa-trash-o" />
    </button>
  );
};

export default ButtonDelete;
