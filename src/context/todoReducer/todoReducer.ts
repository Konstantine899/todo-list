import { IInitialState } from "../initialState/interfaces/IInitialState";
import { TAction } from "./types/TAction";

export const todoReducer = (
  state: IInitialState,
  action: TAction
): IInitialState => {
  switch (action.type) {
    case "addTodo":
      return { ...state, todos: [...state.todos, action.payload] };
    case "deleteTodo":
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload.id),
          ...state.todos.slice(action.payload.id + 1),
        ],
      };
    default:
      return state;
  }
};
