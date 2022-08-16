import { ITodo } from "./ITodo";

export interface IInitialState {
  todos: ITodo[];
  search: string;
  filter: string;
}
