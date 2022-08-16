import React, { FC } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";
import { useTodos } from "../../hooks/useTodos";

const TodoList: FC = () => {
  const { visibleElements } = useTodos();

  return (
    <ul>
      {visibleElements.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
