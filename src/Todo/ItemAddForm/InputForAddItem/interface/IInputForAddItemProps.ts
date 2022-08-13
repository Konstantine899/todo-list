import React from "react";

export interface IInputForAddItemProps {
  label: string;
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
