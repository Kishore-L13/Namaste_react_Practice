import React, { useState } from "react";

export const zigzagJoin = (arr) => {
  return arr.map((str,i)=>(i % 2 === 0 ? str:str.split("").reverse().join(""))).join("")
}

const ZigzagString = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const array = input.split(",").map((s) => s.trim())
    setResult(zigzagJoin(array))
  } 
  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="input-box"
      />
      <button onClick={handleSubmit} data-testid="submit-button">
        Submit
      </button>
      <p data-testid="output-result">Output: {result}</p>
    </div>
  );
};

export default ZigzagString;
