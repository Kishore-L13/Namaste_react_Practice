import { useState } from "react"
import {Menu} from 'lucide-react'

const ToggleNav = ()=>{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return(
        <div>
            <div><button onClick={()=>toggle()}><Menu size={25}/></button></div>
          { isOpen &&( <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>)}
        </div>
    )
}
export default ToggleNav