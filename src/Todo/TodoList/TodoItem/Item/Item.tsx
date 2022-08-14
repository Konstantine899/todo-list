import React, { FC } from "react";
import { ITodoItemProps } from "../interface/ITodoItemProps";

const Item: FC<ITodoItemProps> = ({ todo }) => {
  return <span className="todo-list-item-label">{todo.label}</span>;
};

export default Item;
