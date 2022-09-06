import React from "react";

type CounterType = {
    counter: number
}

const Counter = (props: CounterType) => {
 return <div className='Counter'>
     <h1>{props.counter}</h1>
 </div>
}

export default Counter