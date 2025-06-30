import React, { useState } from 'react'
// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];
const TabSwitch = ()=>{
    const [activeset,setActiveset] = useState("home")
    return (
        <div>
        <h1> Tab Switchwer </h1>
        {tabs.map((tab)=>(
            <button key={tab.id}
            onClick={(e)=>setActiveset(tab.id)}
            //className={activeTab === tab.id ? "active" : ""}
           style={{
  backgroundColor: activeset === tab.id ? 'blue' : ''
}}
            >{tab.label}</button>
        ))}

<div> {tabs.find((tab)=> tab.id === activeset)?.content}</div>       
        </div>
    )
}
export default TabSwitch