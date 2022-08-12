import React from "react";
import "./ItemStatusFilter.css";
import Button from "./Button/Button";

const ItemStatusFilter = () => {
  const buttons = [
    { name: "all", label: "Все" },
    { name: "active", label: "Активные" },
    { name: "done", label: "Выполненные" },
  ];

  return (
    <>
      {buttons.map(({ name, label }) => {
        return <Button key={name} name={name} label={label} />;
      })}
    </>
  );
};

export default ItemStatusFilter;
