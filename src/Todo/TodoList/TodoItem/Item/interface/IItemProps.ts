import { ITodoItemProps } from "../../interface/ITodoItemProps";

export interface IItemProps extends ITodoItemProps {
  important: () => boolean;
}
