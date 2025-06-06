import React, { useRef, useState } from 'react'
const Otp_digit_count = 5
const OTP = () => {
    const [inputArr,setInputArr] = useState(
        new Array(Otp_digit_count).fill("")
    )
    const refArr = useRef([])
    const handleChange = (value, index)=>{
if(isNaN(value)) return
const newValue = value.trim("")
const newArr = [...inputArr];
newArr[index] = value.slice(-1);
setInputArr(newArr);
newValue && refArr.current[index+1]?.focus()
    }
    const handleonkey = (e,index) => {
        if(!e.target.value && e.key === "Backspace"){
refArr.current[index-1]?.focus()
        }
    }
  return (
    <div>
        <h1>Validate OTP</h1>
        {inputArr.map((input,index)=>{
            return(
<input key={index} type='text' className='otp-input' value={inputArr[index]} 
ref={(input)=>(refArr.current[index]=input)}
onChange={(e)=>handleChange(e.target.value,index)}
onKeyDown={(e)=>handleonkey(e,index)}/>
            )
        }
        )}
    </div>
  )
}

export default OTP