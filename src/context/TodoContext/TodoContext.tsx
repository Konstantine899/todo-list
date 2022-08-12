import { createContext } from "react";
import { TContextProps } from "./interface/TContextProps";

export const TodoContext = createContext<TContextProps>({} as TContextProps);
