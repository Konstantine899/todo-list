import { useContext } from "react";
import { TodoContext } from "../context/TodoContext/TodoContext";

export const useTodos = () => {
  const {
    todoState: { todos },
    addTodo,
  } = useContext(TodoContext);
  return { addTodo, todos };
};
