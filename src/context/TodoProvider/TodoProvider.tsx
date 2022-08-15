import { TodoContext } from "../TodoContext/TodoContext";
import { IProps } from "./interface/IProps";
import { useReducer } from "react";
import { todoReducer } from "../todoReducer/todoReducer";
import { initialState } from "../initialState/initialState";
import { ITodo } from "../initialState/interfaces/ITodo";
import { IInitialState } from "../initialState/interfaces/IInitialState";

export const TodoProvider = ({ children }: IProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (item: object): void => {
    dispatch({ type: "addTodo", payload: { ...item } as ITodo });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "deleteTodo", payload: { id } });
  };

  const doneTodo = (id: number) => {
    const newTodo = toggleProperty(id, todoState, "done");
    dispatch({ type: "doneTodo", payload: { newTodo } });
  };

  const importantTodo = (id: number) => {
    const newTodo = toggleProperty(id, todoState, "important");
    dispatch({ type: "importantTodo", payload: { newTodo } });
  };

  //Переиспользую функционал для importantTodo и doneTodo
  function toggleProperty(
    id: number,
    todoState: IInitialState,
    propName: string
  ) {
    console.log("propName", propName);
    const indexElement = todoState.todos.findIndex(
      (element) => element.id === id
    );
    const oldElement = todoState.todos[indexElement]; //Для лучшей читабельности достаю старый элемент
    return {
      ...todoState,
      todos: [
        ...todoState.todos.slice(0, indexElement),
        {
          ...oldElement,
          [propName]:
            !oldElement[`${propName === "important" ? "important" : "done"}`],
        }, // Создаю новый элемент на основе старого
        ...todoState.todos.slice(indexElement + 1),
      ],
    };
  }

  return (
    <TodoContext.Provider
      value={{ todoState, addTodo, deleteTodo, doneTodo, importantTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
