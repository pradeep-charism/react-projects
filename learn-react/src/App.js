import React, { useState } from 'react';
import './App.css';

function Button() {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(1000);
  const handleClick = () => setCounter(counter + 1);
  return (
    <button onClick={handleClick}>
      {counter}
    </button>);
}

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
