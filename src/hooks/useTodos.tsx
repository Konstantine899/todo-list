import { useContext } from "react";
import { TodoContext } from "../context/TodoContext/TodoContext";

export const useTodos = () => {
  const {
    todoState: { todos, filter },
    addTodo,
    deleteTodo,
    doneTodo,
    importantTodo,
    searchInputValueFromUser,
    visibleElements,
    onFilter,
  } = useContext(TodoContext);
  return {
    addTodo,
    todos,
    filter,
    deleteTodo,
    doneTodo,
    importantTodo,
    searchInputValueFromUser,
    visibleElements,
    onFilter,
  };
};
