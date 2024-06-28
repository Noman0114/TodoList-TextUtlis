import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a todo"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default TodoInput;
