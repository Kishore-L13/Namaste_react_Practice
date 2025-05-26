import React, { useState } from 'react'

const CounterApp = () => {
    const[count,setCount] = useState(0)
  return (
  <div>
    <div>Counter:{count}</div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterApp