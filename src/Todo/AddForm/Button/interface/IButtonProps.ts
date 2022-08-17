import { FormEvent } from "react";

export interface IButtonProps {
  Submit: (event: FormEvent<HTMLButtonElement>) => void;
}
