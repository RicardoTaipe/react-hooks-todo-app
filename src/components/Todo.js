import React, { useState } from "react";
import TodoForm from "./TodoForm";
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      // className={todo.isCompleted ? "todo-row complete" : "todo-row "}
      className="my-2 bg-white"
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <div
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          Remove
        </div>
        <div
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
        >
          Edit
        </div>
      </div>
    </div>
  ));
}

export default Todo;
