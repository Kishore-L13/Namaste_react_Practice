import React, { useRef } from 'react'

const Input_focus = () => {
    const input = useRef(null)
    const handleClick = ()=>{
        if(input.current){
            input.current.focus()
        }
    }
  return (
    <div>
        <input type='text' ref={input} />
        <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default Input_focus