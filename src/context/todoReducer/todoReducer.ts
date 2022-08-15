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
    case "doneTodo":
      const indexElement = state.todos.findIndex(
        (element) => element.id === action.payload.id
      );
      const oldElement = state.todos[indexElement]; //Для лучшей читабельности достаю старый элемент
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, indexElement),
          { ...oldElement, done: !oldElement.done }, // Создаю новый элемент на основе старого
          ...state.todos.slice(indexElement + 1),
        ],
      };
    default:
      return state;
  }
};
