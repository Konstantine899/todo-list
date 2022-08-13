import React, { FC } from "react";
import { IButtonSubmitProps } from "./interface/IButtonSubmitProps";

const ButtonSubmit: FC<IButtonSubmitProps> = ({ Submit }) => {
  return (
    <button type="submit" className="btn btn-online-secondary" onClick={Submit}>
      Добавить
    </button>
  );
};

export default ButtonSubmit;
