import React, { FC } from "react";
import "./Todo.css";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import TodoList from "./TodoList/TodoList";
import AddForm from "./AddForm/AddForm";
import { TodoProvider } from "../context/TodoProvider/TodoProvider";

const Todo: FC = () => {
  return (
    <TodoProvider>
      <div className="todoApp">
        <Header />
        <div className="top-panel d-flex">
          <Search />
          <Filter />
        </div>
        <TodoList />
        <AddForm />
      </div>
    </TodoProvider>
  );
};

export default Todo;
