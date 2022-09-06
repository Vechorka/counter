import React from 'react';
import './App.css';
import Counter from './Counter';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {incValueAC, resetValueAC} from "./bll/counter-reducer";


function App() {

    const value = useSelector<AppStoreType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }
    const resetHandler = () => {
        dispatch(resetValueAC())
    }

  return (
    <div className="App">
        <Counter counter={value} />
      <button className={'button'} onClick={incHandler}>INC</button>
      <button className={'button'} onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default App;
