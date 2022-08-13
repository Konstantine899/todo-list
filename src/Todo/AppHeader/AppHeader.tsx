import React, { FC } from "react";
import "./AppHeader.css";

const AppHeader: FC = () => {
  return (
    <div className="app-header">
      <h1>Список дел</h1>
      <h2>1 еще сделать, 2 сделано</h2>
    </div>
  );
};

export default AppHeader;
