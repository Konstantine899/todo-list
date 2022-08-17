import React, { FC, FormEvent, useState } from "react";
import { ITodo } from "../../context/State/interfaces/ITodo";
import Input from "./Input/Input";
import Button from "./Button/Button";
import { useTodos } from "../../hooks/useTodos";
import "./AddForm.css";

const AddForm: FC = () => {
  const { addTodo } = useTodos();
  const [labelState, setLabelState] = useState<string>("");

  const createTodoItem: ITodo = {
    id: Math.floor(Math.random() * 1000) + 1,
    label: labelState.toLowerCase(),
    important: false,
    done: false,
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelState(() => event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (labelState === "") return null;
    addTodo(createTodoItem);
    setLabelState("");
  };

  return (
    <form className="item-add-form d-flex">
      <Input changeInput={changeInput} label={labelState} />
      <Button Submit={handleFormSubmit} />
    </form>
  );
};

export default AddForm;
