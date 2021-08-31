import React, { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { TodoList } from "./components/TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //Aqui como es una desestructuracion de Arreglos le puedo colocar cualquier nombre, por lo cual el nombre state no es obligatorio.
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const { formValues, handleInputChange, reset } = useForm({
    description: "",
  });

  const { description } = formValues;

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToogle = (todoId) => {
    const action = {
      type: "toogle",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

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
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
              value={description}
            />

            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-1" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
