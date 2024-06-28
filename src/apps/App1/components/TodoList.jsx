import React from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <span onClick={() => toggleComplete(index)}>{todo.text}</span>
          <button className="complete-btn" onClick={() => toggleComplete(index)}>
            ✓
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(index)}>
            ✗
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
