import React,{useEffect, useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
setCount=1
    },[])
    const inc = ()=>{
        setCount(prev=>prev+1)
    }
  return (
    <div>Counter:{count}
    <button onClick={inc}>Inc</button></div>
  )
}

export default Counter