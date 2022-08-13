import React, { FC } from "react";
import { IInputForAddItemProps } from "./interface/IInputForAddItemProps";

const InputForAddItem: FC<IInputForAddItemProps> = ({ label, changeInput }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Что-то нужно добавить"
      onChange={changeInput}
      value={label}
    />
  );
};

export default InputForAddItem;
