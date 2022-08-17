import { IState } from "../../State/interfaces/IState";
import { ITodo } from "../../State/interfaces/ITodo";

export interface TContextProps {
  todoState: IState;
  addTodo: (item: object) => void;
  deleteTodo: (id: number) => void;
  doneTodo: (id: number) => void;
  importantTodo: (id: number) => void;
  searchInputValueFromUser: (searchElement: string) => void;
  visibleElements: ITodo[];
  onFilter: (name: string) => void;
  doneElements: number;
  activeElements: number;
}
