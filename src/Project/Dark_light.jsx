import React, { useState } from 'react'

const Dark_light = () => {
    const [isvisible, setIsvisible] = useState(false)
    const toggle = ()=>{
        setIsvisible(!isvisible)
    }
  return (
    <div style={{backgroundColor:isvisible?"black":"White",color:isvisible?"white":"black",
        border:"1px solid black",
    }}>Dark_light
        <div><button onClick={()=>toggle()}>{isvisible ? "Light":"Dark"}</button></div>
    </div>
  )
}

export default Dark_light