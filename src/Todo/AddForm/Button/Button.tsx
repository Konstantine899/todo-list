import React, { FC } from "react";
import { IButtonProps } from "./interface/IButtonProps";

const Button: FC<IButtonProps> = ({ Submit }) => {
  return (
    <button type="submit" className="btn btn-online-secondary" onClick={Submit}>
      Добавить
    </button>
  );
};

export default Button;
