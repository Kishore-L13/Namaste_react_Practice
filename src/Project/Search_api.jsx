import React, { useEffect, useState } from 'react'

const Search_api = () => {
    const [input , setInput] = useState('')
    const [search,setSearch] = useState([])

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
    console.log(data)
    setSearch(recipes?.name)
}
  return (
    
        <div>
        <input type='text' placeholder='Enter the recipes'
        onKeyDown={handlekeypress}
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
      {search.map(item => (
        <span>{item}</span>
     ))} 
    </div>
  )
}

export default Search_api