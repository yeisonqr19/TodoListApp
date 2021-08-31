import React from "react";
import { TodoListItem } from "./TodoListItem";
import { PropTypes } from "prop-types";

export const TodoList = React.memo(({ todos, handleToogle, handleDelete }) => {
  console.log("Me estoy EJecutando ahora");

  return (
    <ul className="list-group list-group-flush">
      {todos?.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          index={i}
          todo={todo}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
        />
      ))}
    </ul>
  );
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToogle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
