import React from "react";
import "./style.css";
function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
