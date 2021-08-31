import React from "react";
import { useForm } from "../../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

export const TodoAdd = React.memo(({ handleAddTodo }) => {
  const { formValues, handleInputChange, reset } = useForm({
    description: "",
  });

  const { description } = formValues;

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

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  );
});
