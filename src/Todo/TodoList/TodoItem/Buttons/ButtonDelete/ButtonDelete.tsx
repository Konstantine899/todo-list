import React, { FC } from "react";
import { IButtonDeleteProps } from "./interfaces/IButtonDeleteProps";
import { useTodos } from "../../../../../hooks/useTodos";

const ButtonDelete: FC<IButtonDeleteProps> = ({ todo }) => {
  const { deleteTodo, todos } = useTodos();

  const deleteItem = (id: number) => {
    const deleteElement = todos.findIndex((element) => element.id === id);
    deleteTodo(deleteElement);
  };
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
