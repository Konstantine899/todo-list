import React from "react";

export interface IInput {
  label: string;
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
