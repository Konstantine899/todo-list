import { IInitialState } from "./interfaces/IInitialState";

export const initialState: IInitialState = {
  todos: [
    {
      id: 1,
      label: "Собери камни бесконечности",
      done: false,
      important: false,
    },
    {
      id: 2,
      label: "У меня уже есть камень души",
      done: false,
      important: false,
    },
  ],
  filter: "all", // active | all | done
};
