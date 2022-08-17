import React, { FC, useState } from "react";
import "./Search.css";
import { useTodos } from "../../hooks/useTodos";

const Search: FC = () => {
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

export default Search;
