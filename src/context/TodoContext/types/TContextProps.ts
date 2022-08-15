import { IInitialState } from "../../initialState/interfaces/IInitialState";

export interface TContextProps {
  todoState: IInitialState;
  addTodo: (item: object) => void;
  deleteTodo: (id: number) => void;
  doneTodo: (id: number) => void;
}
