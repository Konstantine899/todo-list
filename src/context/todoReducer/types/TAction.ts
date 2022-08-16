import { ITodo } from "../../initialState/interfaces/ITodo";
import { IInitialState } from "../../initialState/interfaces/IInitialState";

export type TAction =
  | { type: "addTodo"; payload: ITodo }
  | { type: "deleteTodo"; payload: { id: number } }
  | { type: "doneTodo"; payload: { newTodo: IInitialState } }
  | { type: "importantTodo"; payload: { newTodo: IInitialState } }
  | { type: "searchTodo"; payload: { search: string } }
  | { type: "filterTodo"; payload: { name: string } };
