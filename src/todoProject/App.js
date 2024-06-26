import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoDisplay from "./Components/TodoDisplay";
import "./style.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(todo) {
    setTodoList([...todoList, todo]);
  }
  function toggleCompleted(todoId) {
    const updatedTodo = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodo);
  }
  function deleteTodo(todoId) {
    const updatedTodo = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(updatedTodo);
  }
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodoList(JSON.parse(localTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <h1>Todo Application</h1>
      <TodoForm addTodo={addTodo} />
      <TodoDisplay
        todoList={todoList}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
