import React, { FC } from "react";
import "./AppHeader.css";
import { useTodos } from "../../hooks/useTodos";

const AppHeader: FC = () => {
  const { doneElements, activeElements } = useTodos();
  return (
    <div className="app-header">
      <h2>{`${activeElements} еще активно, ${doneElements} сделано`}</h2>
    </div>
  );
};

export default AppHeader;
