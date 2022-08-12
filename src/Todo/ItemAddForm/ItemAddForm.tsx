import React from "react";
import "./ItemAddForm.css";
import Input from "./Input/Input";
import Button from "./Button/Button";

const ItemAddForm = () => {
  return (
    <form className="item-add-form d-flex">
      <Input />
      <Button />
    </form>
  );
};

export default ItemAddForm;
