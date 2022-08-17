import { ITodo } from "./ITodo";

export interface IState {
  todos: ITodo[];
  search: string;
  filter: string;
}
