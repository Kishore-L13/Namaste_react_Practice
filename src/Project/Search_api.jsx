import React, { useEffect, useState } from 'react'

const Search_api = () => {
    const [input , setInput] = useState('')
    const [search,setSearch] = useState([])
const handlekeypress = (event) => {
 if (event.key === "Enter" && input.trim()!==""){
    const item = {
        label: input.trim()
    }
    setSearch(prev=>[...prev,item]);
    setInput("")
}}
useEffect(()=>{
    const timer = setTimeout(()=>{
      Api_data()
    },3000)
return () => {
    clearTimeout(timer)
}
},[input])
const Api_data = async() =>{
    const response =  await fetch('https://dummyjson.com/recipes')
    const data = await response.json()
    //console.log(data)
}
  return (
    
        <div>
        <input type='text' placeholder='Enter the recipes'
        onKeyDown={handlekeypress}
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
     {input.map(item => (
        <span>{item}</span>
     ))}
    </div>
  )
}

export default Search_api