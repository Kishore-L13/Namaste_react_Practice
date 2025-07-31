import React,{useState} from 'react'

const useCounter = ()=>{
  const [count,setCount] =useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1 )
  }
  const reset = () => setCount(0)
  return {
    count, increment, decrement, reset,
  }
}
export default useCounter;


// import React from "react";
// import "./style.css";
// import useCounter from './useCounter'
// import Button from './Button'
// export default function App() {
//   const {count,increment,decrement,reset} = useCounter()
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//       <h2>Count:{count}</h2>
//       <Button label='INC' onClick={increment}>Inc</Button>
//       <Button label='DEC' onClick={decrement}>Dec</Button>
//       <Button label = 'Reset'onClick={reset}>reset</Button>
//     </div>
//   );
// }