import { ITodo } from "../../State/interfaces/ITodo";
import { IState } from "../../State/interfaces/IState";

export type TAction =
  | { type: "addTodo"; payload: ITodo }
  | { type: "deleteTodo"; payload: { id: number } }
  | { type: "doneTodo"; payload: { newTodo: IState } }
  | { type: "importantTodo"; payload: { newTodo: IState } }
  | { type: "searchTodo"; payload: { search: string } }
  | { type: "filterTodo"; payload: { name: string } };
