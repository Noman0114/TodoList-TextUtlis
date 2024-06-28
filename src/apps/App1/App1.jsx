import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App1.css';

function App1() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
    console.log('Loaded todos from localStorage:', savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Saving todos to localStorage:', todos);
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos, { text: todo, completed: false }];
    setTodos(newTodos);
    console.log('Added new todo:', newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log('Toggled todo completion:', newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log('Deleted todo:', newTodos);
  };

  return (
    <div>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App1;
