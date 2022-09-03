import React from 'react';
import './App.css';
import Counter from './Counter';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {incValueAC, resetValueAC} from "./bll/counter-reducer";


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
      <button onClick={incHandler}>INC</button>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default App;
