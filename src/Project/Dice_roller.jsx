import React, { useState } from 'react'

const Dice_roller = () => {
    const [rolldice,setRolldice] = useState(null)
const Roller = ()=>{
    const randomNumer = Math.floor(Math.random()*6+1)
    setRolldice(randomNumer)
}
  return (
    <div>
        <h1>Roll dice</h1>
        <button style={{marginTop: "20px", fontSize: "24px" }} 
        onClick={Roller}>Roll Dice</button>
        <h3 style={{marginTop: "20px", fontSize: "24px" }}>
          {rolldice!==null?`🎲 ${rolldice}`:"Click to roll"}</h3>
    </div>
  )
}

export default Dice_roller