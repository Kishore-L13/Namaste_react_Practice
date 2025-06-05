import React, { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null)

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev)=>prev + 1)
    },1000)
  }
  const stopTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
  }
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null
    setSeconds(0)
  }
  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  },[])

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Time: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;