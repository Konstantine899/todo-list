import React, { FC, useState } from "react";
import "./SearchPanel.css";
import { useTodos } from "../../hooks/useTodos";

const SearchPanel: FC = () => {
  const [searchElement, setSearchElement] = useState<string>("");

  const { searchInputValueFromUser } = useTodos();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchElement = event.target.value;
    setSearchElement(searchElement);
    searchInputValueFromUser(searchElement);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Введите для поиска"
      value={searchElement}
      onChange={onSearch}
    />
  );
};

export default SearchPanel;
