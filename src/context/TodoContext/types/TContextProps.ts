import { IInitialState } from "../../initialState/interfaces/IInitialState";
import { ITodo } from "../../initialState/interfaces/ITodo";

export interface TContextProps {
  todoState: IInitialState;
  addTodo: (item: object) => void;
  deleteTodo: (id: number) => void;
  doneTodo: (id: number) => void;
  importantTodo: (id: number) => void;
  searchInputValueFromUser: (searchElement: string) => void;
  visibleElements: ITodo[];
}
