import React from "react";

type CounterType = {
    counter: number
}

const Counter = (props: CounterType) => {
 return <h1>{props.counter}</h1>
}

export default Counter