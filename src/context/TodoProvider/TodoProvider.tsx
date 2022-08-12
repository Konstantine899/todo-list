import { TodoContext } from "../TodoContext/TodoContext";
import { IProps } from "./interface/IProps";
import { useReducer } from "react";
import { todoReducer } from "../todoReducer/todoReducer";
import { initialState } from "../initialState/initialState";

export const TodoProvider = ({ children }: IProps) => {
  const [todoState, _] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todoState }}>
      {children}
    </TodoContext.Provider>
  );
};
