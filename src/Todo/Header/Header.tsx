import React, { FC } from "react";
import "./Header.css";
import { useTodos } from "../../hooks/useTodos";

const Header: FC = () => {
  const { doneElements, activeElements } = useTodos();
  return (
    <div className="app-header">
      <h2>{`${activeElements}  активно, ${doneElements} выполнено`}</h2>
    </div>
  );
};

export default Header;
