import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './Counter';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incCounterValueAC, resetValueAC} from "./bll/counter-reducer";

function App() {
//   const [counter, setCounter] = useState(0)
//
//
// useEffect(()=>{
//         let counterAsString = localStorage.getItem('counterValue')
//         if (counterAsString) {
//             let newCounter = JSON.parse(counterAsString)
//             setCounter(newCounter)
//         }
//     },[])
//
//     useEffect(()=>{
//         localStorage.setItem('counterValue' , JSON.stringify(counter))
//     },[counter])

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

  const incHandler = () => {
      dispatch(incCounterValueAC())
  }
  const resetHandler = () => {
      dispatch(resetValueAC())
  }

  return (
    <div className="App">
      <Counter counter={value} />
      <button onClick={incHandler}>INC</button>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default App;
