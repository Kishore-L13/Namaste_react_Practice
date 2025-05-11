import React, { useState } from "react";
function ChipsInput() {
const [input,setInput] = useState("")
const [chips , setChips] = useState([])
const [counter,setCounter] = useState(0)

const handlekeypress = (event) => {
 if (event.key === "Enter" && input.trim()!==""){
    const item = {
        id: counter,
        label: input.trim()
    }
    setChips(prev=>[...prev,item]);
    setCounter(counter+1)
    setInput("")
 }

}
 const handleDeleteChip = (id) =>{
   setChips (chips.filter((C)=>
        C.id !== id
    ))
 }

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={handlekeypress}
        style={{ padding: "8px", width: "200px" }}
      />
      {chips.map((C)=>(
        <div key={C.id} className="label">
        <span>{C.label}</span>
        <button className="label-btn"
        onClick={()=>handleDeleteChip(C.id)}>X</button>
      </div>))}
    </div>
  );
}

export default ChipsInput;