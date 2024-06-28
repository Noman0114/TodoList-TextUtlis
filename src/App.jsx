import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App1 from './apps/App1/App1';
import App2 from './apps/App2/App2';
import './App.css';

function App() {
  return (
    <Router>
       <nav>
          <ul>

            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app1">Todo List</Link>
            </li>
            <li>
              <Link to="/app2">Text Utils</Link>
            </li>
          </ul>
        </nav>
      <div className="App">
       
        <Routes>
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/" element={<h1>Welcome to First React Project</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
