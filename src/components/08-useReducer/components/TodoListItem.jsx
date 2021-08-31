import React from "react";

export const TodoListItem = React.memo(
  ({ handleToogle, handleDelete, index, todo }) => {
    console.log("Me estoy EJecutando ahora");

    return (
      <li className="list-group-item">
        <p
          onClick={() => handleToogle(todo.id)}
          className={`text-center ${todo.done && "complete"}`}
        >
          {index + 1}. {todo.desc}
        </p>

        <button
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Borrar
        </button>
      </li>
    );
  }
);
