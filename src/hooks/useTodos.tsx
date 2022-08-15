import { useContext } from "react";
import { TodoContext } from "../context/TodoContext/TodoContext";

export const useTodos = () => {
  const {
    todoState: { todos },
    addTodo,
    deleteTodo,
    doneTodo,
    importantTodo,
  } = useContext(TodoContext);
  return { addTodo, todos, deleteTodo, doneTodo, importantTodo };
};
