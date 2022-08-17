import { ITodo } from "../../../../../../context/State/interfaces/ITodo";

export interface IButtonToggleDone {
  todo: ITodo;
  importantItem: (id: number) => void;
}
