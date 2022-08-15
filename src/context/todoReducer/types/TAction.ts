import { ITodo } from "../../initialState/interfaces/ITodo";

export type TAction =
  | { type: "addTodo"; payload: ITodo }
  | { type: "deleteTodo"; payload: { id: number } }
  | { type: "doneTodo"; payload: { id: number } };
