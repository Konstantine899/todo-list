import React, { FC } from "react";
import { ITodoItemProps } from "../interface/ITodoItemProps";
import { useTodos } from "../../../../hooks/useTodos";
import "./Item.css";

const Item: FC<ITodoItemProps> = ({ todo }) => {
  const { doneTodo, todos } = useTodos();

  const done = () => {
    const indexElement = todos.findIndex((element) => element.id === todo.id);
    const element = todos[indexElement];
    return element.done;
  };

  const toggleDone = (id: number) => {
    console.log(id);
    doneTodo(id);
  };
  return (
    <span
      className={`todo-list-item ${done() ? "done" : null}`}
      onClick={() => toggleDone(todo.id)}
    >
      {todo.label}
    </span>
  );
};

export default Item;
