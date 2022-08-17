import { TodoContext } from "../TodoContext/TodoContext";
import { ITodoProviderProps } from "./interface/ITodoProviderProps";
import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer/todoReducer";
import { State } from "../State/State";
import { ITodo } from "../State/interfaces/ITodo";
import { IState } from "../State/interfaces/IState";
import { Todo } from "../enum/Todo";
import { ToggleProperty } from "../enum/ToggleProperty";
import { StatusFilter } from "../enum/StatusFilter";

const initStorage = () => {
  return JSON.parse(localStorage.getItem("todoState") || "{}");
};

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, State, initStorage);

  useEffect(() => {
    localStorage.setItem("todoState", JSON.stringify(todoState));
  }, [todoState]);

  const addTodo = (item: object): void => {
    dispatch({ type: Todo.AddTodo, payload: { ...item } as ITodo });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: Todo.DeleteTodo, payload: { id } });
  };

  const doneTodo = (id: number): void => {
    const newTodo = toggleProperty(id, todoState, ToggleProperty.Done);
    dispatch({ type: Todo.DoneTodo, payload: { newTodo } });
  };

  const importantTodo = (id: number): void => {
    const newTodo = toggleProperty(id, todoState, ToggleProperty.Important);
    dispatch({ type: Todo.ImportantTodo, payload: { newTodo } });
  };

  //Переиспользую функционал для importantTodo и doneTodo
  function toggleProperty(
    id: number,
    todoState: IState,
    propName: string
  ): IState {
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
            !oldElement[
              `${
                propName === ToggleProperty.Important
                  ? ToggleProperty.Important
                  : ToggleProperty.Done
              }`
            ],
        }, // Создаю новый элемент на основе старого
        ...todoState.todos.slice(indexElement + 1),
      ],
    };
  }

  //Отправка введенного значения пользователя в состояние
  const searchInputValueFromUser = (searchElement: string): void => {
    dispatch({ type: Todo.SearchTodo, payload: { search: searchElement } });
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
    dispatch({ type: Todo.FilterTodo, payload: { name } });
  };

  const filterStatusElement = (state: ITodo[], name: string) => {
    switch (name) {
      case StatusFilter.All:
        return state;
      case StatusFilter.Active:
        return state.filter((element) => !element.done);
      case StatusFilter.Done:
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
    (element) => element.done // или element.done === true
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
