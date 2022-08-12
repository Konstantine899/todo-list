import React from "react";
import { ITodoItemProps } from "../interface/ITodoItemProps";

const Item = ({ todo }: ITodoItemProps) => {
  return <span className="todo-list-item-label">{todo.label}</span>;
};

export default Item;
