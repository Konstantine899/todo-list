import React, { FC, FormEvent, useState } from "react";
import { ITodo } from "../../context/initialState/interfaces/ITodo";
import InputForAddItem from "./InputForAddItem/InputForAddItem";
import ButtonSubmit from "./ButtonSubmit/ButtonSubmit";
import { useTodos } from "../../hooks/useTodos";
import "./ItemAddForm.css";

const ItemAddForm: FC = () => {
  const { addTodo } = useTodos();
  const [labelState, setLabelState] = useState<string>("");

  const createTodoItem: ITodo = {
    id: Math.random(),
    label: labelState.toLowerCase(),
    important: false,
    done: false,
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelState(() => event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(createTodoItem);
    setLabelState("");
  };

  return (
    <form className="item-add-form d-flex">
      <InputForAddItem changeInput={changeInput} label={labelState} />
      <ButtonSubmit Submit={handleFormSubmit} />
    </form>
  );
};

export default ItemAddForm;
