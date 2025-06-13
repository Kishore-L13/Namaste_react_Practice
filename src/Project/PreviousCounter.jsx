import React, { useState } from 'react'
import usePrevious from './usePrevious'
const PreviousCounter = () => {
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(prev=>prev+1)
    }
    const decrement = ()=>{
        setCount(prev=>prev-1)
    }
    const reset = ()=>{
        setCount(0)
    }
      const previousCount = usePrevious(count);
  return (
    <div>
        <h1>Counter: {count}</h1>
        <h2>Previous: {previousCount}</h2>
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>reset()}>Reset</button>
        <button onClick={()=>decrement()}>Decrement</button>
    </div>
  )
}

export default PreviousCounter