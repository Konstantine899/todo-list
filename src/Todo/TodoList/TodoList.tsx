import React, { FC } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";
import { useTodos } from "../../hooks/useTodos";

const TodoList: FC = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
