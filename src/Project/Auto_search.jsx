import React, { useState } from 'react'

const item = ["Apple","banana","mango","orange"]

const Auto_search = () => {
    const [input,setInput] = useState("")
    const [search,setSearch] = useState([])
    const [show,setShow] = useState(false)
    const handleSearch = (input) => {
    setInput(input);
    const filtered = item.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setSearch(filtered);
  };
  return (
    <div className='search'>
        <input type='text' placeholder='search' 
        value={input} 
        onFocus={(e)=>setShow(true)}
        onBlur={(e)=>setShow(false)}
        onChange={(e)=>handleSearch(e.target.value)}
        />
        {show && search.length > 0 && search.map((i,index) =>(
            <span key={index}>{i}</span>
        ))}
    </div>
  )
}

export default Auto_search