import React from "react";

type CounterType = {
    counter: number
}

const Counter = (props: CounterType) => {
 return <div>{props.counter}</div>
}

export default Counter