import { ITodo } from "../../../../../../context/initialState/interfaces/ITodo";

export interface IButtonToggleDone {
  todo: ITodo;
  importantItem: (id: number) => void;
}
