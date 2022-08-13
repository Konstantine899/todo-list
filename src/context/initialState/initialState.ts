import { IInitialState } from "./interfaces/IInitialState";

export const initialState: IInitialState = {
  todos: [],
  filter: "all", // active | all | done
};
