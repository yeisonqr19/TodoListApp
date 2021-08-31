import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToogle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos?.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          index={i}
          id={todo.id}
          desc={todo.desc}
          done={todo.done}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
        />
      ))}
    </ul>
  );
};
