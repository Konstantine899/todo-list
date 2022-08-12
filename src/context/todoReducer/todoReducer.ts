import { IInitialState } from "../initialState/interfaces/IInitialState";
import { TAction } from "./types/TAction";

export const todoReducer = (
  state: IInitialState,
  action: TAction
): IInitialState => {
  switch (action.type) {
    default:
      return state;
  }
};
