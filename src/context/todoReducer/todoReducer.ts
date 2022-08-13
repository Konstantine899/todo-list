import { IInitialState } from "../initialState/interfaces/IInitialState";
import { TAction } from "./types/TAction";

export const todoReducer = (
  state: IInitialState,
  action: TAction
): IInitialState => {
  switch (action.type) {
    case "addTodo":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};
