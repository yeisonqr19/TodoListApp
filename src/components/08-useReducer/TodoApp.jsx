import React, { useCallback, useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //Aqui como es una desestructuracion de Arreglos le puedo colocar cualquier nombre, por lo cual el nombre state no es obligatorio.
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = useCallback(
    (todoId) => {
      const action = {
        type: "delete",
        payload: todoId,
      };

      dispatch(action);
    },
    [dispatch]
  );

  const handleToogle = useCallback(
    (todoId) => {
      const action = {
        type: "toogle",
        payload: todoId,
      };

      dispatch(action);
    },
    [dispatch]
  );

  const handleAddTodo = useCallback(
    (newTodo) => {
      dispatch({
        type: "add",
        payload: newTodo,
      });
    },
    [dispatch]
  );

  return (
    <div>
      <h1>
        TodoApp (<small>{todos?.length}</small>)
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToogle={handleToogle}
            handleDelete={handleDelete}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
