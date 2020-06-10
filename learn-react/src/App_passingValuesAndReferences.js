import React, { useState } from 'react';
import './App.css';

function Button(props) {
  // const [count, setCount] = useState(1000);
  // const handleClick = () => setCounter(props.counter + 1);
  const handleClick = () => props.onClickFunction(props.incrementBy);
  return (
  <button onClick={handleClick}>+{props.incrementBy}</button>);
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
  const incrementFunction = (incrementBy) => setCounter(counter + incrementBy);

  return (
    <div className="App">
      <Button onClickFunction={incrementFunction} incrementBy={1}/>
      <Button onClickFunction={incrementFunction} incrementBy={2}/>
      <Button onClickFunction={incrementFunction} incrementBy={5}/>
      <Button onClickFunction={incrementFunction} incrementBy={10}/>
      <Button onClickFunction={incrementFunction} incrementBy={50}/>
      <Button onClickFunction={incrementFunction} incrementBy={100}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
