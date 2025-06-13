import React, { useEffect, useState } from 'react'

const Timer_disable = () => {
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(()=>{
setVisible(!visible)
console.log("btn disable")
        },5000)
        return ()=>{
            clearTimeout(timer)
        }
    },[])
  return (

    <div>
        <h1>Timer_disable</h1>
        <button disabled={visible}>{visible ?"wait":"disable"}</button>
    </div>
  )
}

export default Timer_disable