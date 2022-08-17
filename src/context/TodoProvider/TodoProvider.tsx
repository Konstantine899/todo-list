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

  const doneTodo = (id: number): void => {
    const newTodo = toggleProperty(id, todoState, "done");
    dispatch({ type: "doneTodo", payload: { newTodo } });
  };

  const importantTodo = (id: number): void => {
    const newTodo = toggleProperty(id, todoState, "important");
    dispatch({ type: "importantTodo", payload: { newTodo } });
  };

  //Переиспользую функционал для importantTodo и doneTodo
  function toggleProperty(
    id: number,
    todoState: IInitialState,
    propName: string
  ): IInitialState {
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

  //Отправка введенного значения пользователя в состояние
  const searchInputValueFromUser = (searchElement: string): void => {
    dispatch({ type: "searchTodo", payload: { search: searchElement } });
  };

  //Фильтрация искомого значения
  const search = (todos: ITodo[], searchElement: string): ITodo[] => {
    return todos.filter((element) => {
      if (element.label.length === 0) return element;
      return (
        element.label.toLowerCase().indexOf(searchElement.toLowerCase()) > -1
      );
    });
  };

  const onFilter = (name: string) => {
    dispatch({ type: "filterTodo", payload: { name } });
  };

  const filterStatusElement = (state: ITodo[], name: string) => {
    switch (name) {
      case "all":
        return state;
      case "active":
        return state.filter((element) => !element.done);
      case "done":
        return state.filter((element) => element.done);
      default:
        return state;
    }
  };

  const visibleElements = filterStatusElement(
    search(todoState.todos, todoState.search),
    todoState.filter
  );

  //Подсчет количества выполненных элементов
  const doneElements = todoState.todos.filter(
    (element) => element.done === true
  ).length;
  //Подсчет количества активных элементов
  const activeElements = todoState.todos.length - doneElements;
  return (
    <TodoContext.Provider
      value={{
        todoState,
        addTodo,
        deleteTodo,
        doneTodo,
        importantTodo,
        searchInputValueFromUser,
        visibleElements,
        onFilter,
        doneElements,
        activeElements,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
