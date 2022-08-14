import { TodoContext } from "../TodoContext/TodoContext";
import { IProps } from "./interface/IProps";
import { useReducer } from "react";
import { todoReducer } from "../todoReducer/todoReducer";
import { initialState } from "../initialState/initialState";
import { ITodo } from "../initialState/interfaces/ITodo";

export const TodoProvider = ({ children }: IProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (item: object): void => {
    dispatch({ type: "addTodo", payload: { ...item } as ITodo });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "deleteTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
