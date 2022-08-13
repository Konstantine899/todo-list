import React, { FC, useContext } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";
import { TodoContext } from "../../context/TodoContext/TodoContext";

const TodoList: FC = () => {
  const {
    todoState: { todos },
  } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
