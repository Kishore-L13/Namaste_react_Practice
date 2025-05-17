import React, { useEffect, useState } from 'react'

const Search_api = () => {
    const [input , setInput] = useState('')
    const [search,setSearch] = useState([])
    const [show,setShow] = useState(false)
    const [cache , setCache] = useState([])
useEffect(()=>{
    const timer = setTimeout(()=>{
    Api_data()
    },300)
return () => {
    clearTimeout(timer)
}
},[input])
const Api_data = async() =>{
 // console.log("api"+input)
  if (cache[input]){
    //console.log('cache',input)
    setSearch(cache[input])
    return
  }
    const response =  await fetch('https://dummyjson.com/recipes/search?q='+input)
    const data = await response.json()
    console.log(data)
      setSearch(data?.recipes);
      setCache(prev => ({...prev, [input]:data?.recipes}))
}
  return (
    
        <div className='search-api'>
        <input type='text' placeholder='Enter the recipes'
        onFocus={()=>setShow(true)}
        onBlur={()=>setShow(false)}
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
      {show && (search.map(item => (
        <span key={item.id}>{item.name}</span>
     )))} 
    </div>
  )
}

export default Search_api