import React from "react";
import ButtonToggleDone from "./Buttons/ButtonToggleDone";
import ButtonDelete from "./Buttons/ButtonDelete";
import { ITodoItemProps } from "./interface/ITodoItemProps";
import Item from "./Item/Item";

const TodoItem = ({ todo }: ITodoItemProps) => {
  return (
    <span className="list-group-item">
      <Item todo={todo} />
      <div>
        <ButtonToggleDone />
        <ButtonDelete />
      </div>
    </span>
  );
};

export default TodoItem;
