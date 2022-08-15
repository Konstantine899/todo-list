import React, { FC } from "react";
import ButtonToggleDone from "./Buttons/ButtonToggleDone";
import ButtonDelete from "./Buttons/ButtonDelete";
import { ITodoItemProps } from "./interface/ITodoItemProps";
import Item from "./Item/Item";
import "./TodoItem.css";

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <span className="list-group-item">
      <Item todo={todo} />
      <div>
        <ButtonToggleDone />
        <ButtonDelete todo={todo} />
      </div>
    </span>
  );
};

export default TodoItem;
