import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  return (
    <ul className="list-group-item">
      <TodoItem />
    </ul>
  );
};

export default TodoList;
