import { IState } from "../State/interfaces/IState";
import { TAction } from "./types/TAction";
import { Todo } from "../enum/Todo";

export const todoReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case Todo.AddTodo:
      return { ...state, todos: [...state.todos, action.payload] };
    case Todo.DeleteTodo:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload.id),
          ...state.todos.slice(action.payload.id + 1),
        ],
      };
    case Todo.DoneTodo:
      return { ...action.payload.newTodo };
    case Todo.ImportantTodo:
      return { ...action.payload.newTodo };
    case Todo.SearchTodo:
      return { ...state, search: action.payload.search };
    case Todo.FilterTodo:
      return { ...state, filter: action.payload.name };
    default:
      return state;
  }
};
