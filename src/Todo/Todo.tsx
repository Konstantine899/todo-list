import React from "react";
import "./Todo.css";
import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";
import TodoList from "./TodoList/TodoList";
import ItemAddForm from "./ItemAddForm/ItemAddForm";

const Todo = () => {
  return (
    <div className="todoApp">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

export default Todo;
