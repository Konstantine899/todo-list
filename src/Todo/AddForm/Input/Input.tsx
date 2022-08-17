import React, { FC } from "react";
import { IInput } from "./interface/IInput";

const Input: FC<IInput> = ({ label, changeInput }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Добавить элемент"
      onChange={changeInput}
      value={label}
    />
  );
};

export default Input;
