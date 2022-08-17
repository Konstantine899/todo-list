import { IState } from "./interfaces/IState";
import { StatusFilter } from "../enum/StatusFilter";

export const State: IState = {
  todos: [],
  search: "",
  filter: StatusFilter.All, // active | all | done
};
