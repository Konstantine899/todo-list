import { createContext } from "react";
import { TContextProps } from "./types/TContextProps";

export const TodoContext = createContext<TContextProps>({} as TContextProps);
