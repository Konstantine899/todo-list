import React, { FC } from "react";
import "./SearchPanel.css";

const SearchPanel: FC = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Введите для поиска"
    />
  );
};

export default SearchPanel;
