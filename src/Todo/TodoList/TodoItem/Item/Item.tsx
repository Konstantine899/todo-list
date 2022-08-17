import React, { FC } from "react";
import { useTodos } from "../../../../hooks/useTodos";
import "./Item.css";
import { IItemProps } from "./interface/IItemProps";
import { ToggleProperty } from "../../../../context/enum/ToggleProperty";

const Item: FC<IItemProps> = ({ todo, important }) => {
  const { doneTodo, todos } = useTodos();

  const done = () => {
    const indexElement = todos.findIndex((element) => element.id === todo.id);
    const element = todos[indexElement];
    return element.done;
  };

  const toggleDone = (id: number) => {
    doneTodo(id);
  };
  return (
    <span
      className={`todo-list-item ${done() ? ToggleProperty.Done : null} ${
        important() ? ToggleProperty.Important : null
      }`}
      onClick={() => toggleDone(todo.id)}
    >
      {todo.label}
    </span>
  );
};

export default Item;
