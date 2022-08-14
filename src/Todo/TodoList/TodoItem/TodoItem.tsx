import React, { FC } from "react";
import ButtonToggleDone from "./Buttons/ButtonToggleDone";
import ButtonDelete from "./Buttons/ButtonDelete";
import { ITodoItemProps } from "./interface/ITodoItemProps";
import Item from "./Item/Item";
import { useTodos } from "../../../hooks/useTodos";

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const { deleteTodo, todos } = useTodos();

  const deleteItem = (id: number) => {
    const deleteElement = todos.findIndex((element) => element.id === id);
    deleteTodo(deleteElement);
  };

  return (
    <span className="list-group-item">
      <Item todo={todo} />
      <div>
        <ButtonToggleDone />
        <ButtonDelete todo={todo} deleteItem={deleteItem} />
      </div>
    </span>
  );
};

export default TodoItem;
