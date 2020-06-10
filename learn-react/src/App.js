import React, { useState } from 'react';
import './App.css';

function Button(props) {
  const [count, setCount] = useState(1000);
  // const handleClick = () => setCounter(props.counter + 1);
  return (
    <button onClick={props.onClickFunction}>+1</button>);
}

function Display(props){
  return (
      <div>
        {props.message}
      </div>
  );
}

function App() {
  const [counter, setCounter] = useState(100);
  const incrementFunction = () => setCounter(counter + 1);

  return (
    <div className="App">
      <Button onClickFunction={incrementFunction}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
