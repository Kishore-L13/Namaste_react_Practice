import React, { useState } from 'react'

const CheckEvenorOdd = () => {
  const [input,setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [result,setResult] = useState(null)
  const Check = ()=>{
   
    setLoading(true)
    setResult(null)
  setTimeout =(()=>  {const number = parseInt(input,10)
    if (isNaN(number)){
        setResult("please enter valied number")
    }else {
        setResult(`The number ${number} is ${number%2===0?'Even':'Odd'}`)
    }
     setLoading(false)
    },1000)
  }
    return (
    
    <div>
        <h1>Even or Odd</h1>
        <input type='text' placeholder='Enter the number'
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={Check}>Check</button>
        <div className="result-area" data-testid='result-area'>
      {loading ? ( 
        <div>Checking...</div>
      ) : result !== null ? (
            <div>{result}</div>
      ):null}
    </div></div>
  )
}

export default CheckEvenorOdd