import React, { useEffect, useState } from 'react';
import { Weather_data } from '../../utils/Weather_data';
// const w = [
//   { name: 'London', temp: '32C', Day: 'Sunny' },
//   { name: 'India', temp: '30C', Day: 'Cloudy' },
//   { name: 'USA', temp: '25C', Day: 'Rainy' },
//   { name: 'Dubai', temp: '40C', Day: 'Hot' }
// ];
const W_data = Weather_data;
const Weather_api = () => {
    const [input,setInput] = useState("")
    const [isOpen,setIsOpen] = useState(false)
    const [search,setSearch] = useState([])

    useEffect(()=>{

    })
    const HandleSearch = (input)=>{
        setInput(input)
      if (input.trim()===''){
        setSearch([])
        setIsOpen(false)
        return
      }
      const filtered = W_data.filter((item)=> 
        item?.location?.name.toLowerCase().includes(input.toLowerCase())
    )
     setSearch(filtered)
     setIsOpen(true)
    }
    return(
        <div>
            <h1>Weather App</h1>
            <input type='text' value={input} placeholder='Enter any place'
            onChange={(e)=>HandleSearch(e.target.value)}
            onFocus={(e)=>input && setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            />
            {isOpen && search.length > 0 && (
  <div>
    {search.map((item, index) => (
      <div key={index}>
        {item?.location?.name} {item?.location?.region} {item?.location?.country}
      </div>
    ))}
  </div>
)}
   {isOpen && search.length === 0 && input && (
  <div style={{ color: 'gray' }}>No matching results</div>
)}
  </div>
    )
}

export default Weather_api;
