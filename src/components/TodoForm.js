import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      id: edit ? edit.id : uuidv4(),
      text: input,
    });
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white">
      <button>{edit ? "Update todo" : "Add todo"}</button>
      <input
        type="text"
        placeholder={edit ? "Update your todo" : "Create a new todo"}
        value={input}
        onChange={handleChange}
        name="text"
        ref={inputRef}
      />
    </form>
  );
}

export default TodoForm;
