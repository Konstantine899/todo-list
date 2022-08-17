import React, { FC } from "react";
import "./Filter.css";
import Button from "./Button/Button";
import { StatusFilter } from "../../context/enum/StatusFilter";

const Filter: FC = () => {
  const buttons = [
    { name: StatusFilter.All, label: "Все" },
    { name: StatusFilter.Active, label: "Активные" },
    { name: StatusFilter.Done, label: "Выполненные" },
  ];

  return (
    <>
      {buttons.map(({ name, label }) => {
        return <Button key={name} name={name} label={label} />;
      })}
    </>
  );
};

export default Filter;
