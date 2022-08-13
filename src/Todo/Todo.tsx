import React, { FC } from "react";
import "./Todo.css";
import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";
import TodoList from "./TodoList/TodoList";
import ItemAddForm from "./ItemAddForm/ItemAddForm";
import { TodoProvider } from "../context/TodoProvider/TodoProvider";

const Todo: FC = () => {
  return (
    <TodoProvider>
      <div className="todoApp">
        <AppHeader />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList />
        <ItemAddForm />
      </div>
    </TodoProvider>
  );
};

export default Todo;
