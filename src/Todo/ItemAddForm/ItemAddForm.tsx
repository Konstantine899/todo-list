import React, { FC, FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import { ITodo } from "../../context/initialState/interfaces/ITodo";
import "./ItemAddForm.css";
import InputForAddItem from "./InputForAddItem/InputForAddItem";
import ButtonSubmit from "./ButtonSubmit/ButtonSubmit";

const ItemAddForm: FC = () => {
  const { addTodo } = useContext(TodoContext);
  const [label, setLabel] = useState<string>("");

  const item: ITodo = {
    id: Math.random(),
    label: label.toLowerCase(),
    important: false,
    done: false,
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(() => event.target.value);
  };

  const Submit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(item);
  };

  return (
    <form className="item-add-form d-flex">
      <InputForAddItem changeInput={changeInput} label={label} />
      <ButtonSubmit Submit={Submit} />
    </form>
  );
};

export default ItemAddForm;
