import React, { useState } from 'react'
const items = [{
    emoji:'🏡', label:'house'},
    {
    emoji:'📧', label:'mail'},
    {
    emoji:'🏍', label:'Bike'},
    {
    emoji:'🛑', label:'Stop'},
    {
    emoji:'🟢', label:'Go'},
 
]

const Tooltip1 = () => {
    const [handlekey,setHandlekey] = useState(null)
    const handlemouseenter = (index)=>{
       setHandlekey(index)
    }
    const handlemouseleave = ()=>{
       setHandlekey(null)
    }
  return (
    <div>
        {items.map((i,index)=>(
            <span key={index}
            onMouseEnter={()=>handlemouseenter(index)}
            onMouseLeave={handlemouseleave}
            >{i.emoji}
             {handlekey === index &&(<div>{i.label}</div>)}
            </span>
        ))}
      
    </div>
  )
}

export default Tooltip1