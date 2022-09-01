import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counter, setCounter] = useState(0)

  const incHandler = () => {
    setCounter(counter + 1)
  }
  const resetHandler = () => {
    setCounter(0)
  }


  return (
    <div className="App">
      <Counter counter={counter} />
      <button onClick={incHandler}>INC</button>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default App;
