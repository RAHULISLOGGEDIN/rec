import React, { useState } from "react";
import { v4 } from "uuid";

export default function TodoForm({ addTodo }) {
  const [todoString, setTodoString] = useState("");
  function handleAddTodo(e) {
    e.preventDefault();
    if (todoString === "") {
      return alert("Todo cannot be blank");
    }
    const todo = {
      value: todoString,
      isCompleted: false,
      id: v4(),
    };
    addTodo(todo);
    setTodoString("");

    //addTodo()
  }
  return (
    <form>
      <input
        type="text"
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </form>
  );
}
