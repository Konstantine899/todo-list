import React, { FC } from "react";
import { IButtonToggleDone } from "./interface/IButtonImportantProps";

const ButtonImportant: FC<IButtonToggleDone> = ({ todo, importantItem }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-success btn-sm float-right"
      onClick={() => importantItem(todo.id)}
    >
      <i className="fa fa-exclamation" />
    </button>
  );
};

export default ButtonImportant;
