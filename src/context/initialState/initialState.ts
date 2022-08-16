import { IInitialState } from "./interfaces/IInitialState";

export const initialState: IInitialState = {
  todos: [],
  search: "",
  filter: "all", // active | all | done
};
