import React from "react";
import Item from "./Item/Item";
import ButtonToggleDone from "./Buttons/ButtonToggleDone";
import ButtonDelete from "./Buttons/ButtonDelete";

const TodoItem = () => {
  return (
    <span>
      <Item />
      <ButtonToggleDone />
      <ButtonDelete />
    </span>
  );
};

export default TodoItem;
