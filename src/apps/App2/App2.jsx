import React, { useState } from 'react';
import './App2.css';

function App2() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="App">
      <div className="container">
        <h1>Text Utility App</h1>
        <textarea
          value={text}
          onChange={handleChange}
          rows="10"
          cols="50"
          placeholder="Enter your text here"
        ></textarea>
        <div className="buttons">
          <button onClick={handleUpperCase}>Uppercase</button>
          <button onClick={handleLowerCase}>Lowercase</button>
          <button onClick={handleClearText}>Clear Text</button>
          <button onClick={handleCopyText}>Copy Text</button>
          <button onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="info">
          <p>Word Count: {wordCount}</p>
          <p>Character Count: {charCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App2;
