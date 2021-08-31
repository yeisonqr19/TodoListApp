import React from "react";

export const TodoListItem = ({
  handleToogle,
  handleDelete,
  index,
  desc,
  id,
  done,
}) => {
  return (
    <li className="list-group-item">
      <p
        onClick={() => handleToogle(id)}
        className={`text-center ${done && "complete"}`}
      >
        {index + 1}. {desc}
      </p>

      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Borrar
      </button>
    </li>
  );
};
