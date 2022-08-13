import { FormEvent } from "react";

export interface IButtonSubmitProps {
  Submit: (event: FormEvent<HTMLButtonElement>) => void;
}
