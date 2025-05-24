import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react';
const TogglePassword = () =>{
    const [input , setInput] = useState("")
    const [passwordvisble,setPasswordvisible] = useState(false)
    const toggle = ()=>{
        setPasswordvisible(!passwordvisble)
    }
    return(
        <div>
            <h1>Toogle Password</h1>
            <input type={ passwordvisble?"text":"password"}
            placeholder="Enter password"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
        <span onClick={()=>toggle()}>
               { passwordvisble?<Eye size={18}/>:<EyeOff size={18}/>}
        </span>    
      <div> {passwordvisble ? "Password shown":"Password hidden"}</div> 
        </div>
    )
}
export default TogglePassword