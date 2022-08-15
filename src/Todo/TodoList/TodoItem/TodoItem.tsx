import React, { FC } from "react";
import ButtonImportant from "./Buttons/ButtonImportant/ButtonImportant";
import ButtonDelete from "./Buttons/ButtonDelete/ButtonDelete";
import Item from "./Item/Item";
import "./TodoItem.css";
import { useTodos } from "../../../hooks/useTodos";
import { ITodoItemProps } from "./interface/ITodoItemProps";

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const { todos, importantTodo } = useTodos();

  const important = (): boolean => {
    const indexElement = todos.findIndex((element) => element.id === todo.id);
    const element = todos[indexElement];
    return element.important;
  };

  const importantItem = (id: number): void => {
    importantTodo(id);
  };

  return (
    <span className="list-group-item">
      <Item todo={todo} important={important} />
      <div>
        <ButtonImportant todo={todo} importantItem={importantItem} />
        <ButtonDelete todo={todo} />
      </div>
    </span>
  );
};

export default TodoItem;
