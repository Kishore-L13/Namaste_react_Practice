import React, { useState } from 'react'

const Scoreboard = () => {
    const [balls,setBalls] = useState([]);
    const [total,setTotal] = useState(0)
    const addrun = ()=>{
        if (balls.length<6){
            const run = Math.floor(Math.random()*6+1)
            setBalls([...balls,run])
            setTotal(prev=>prev+run)
        }
    }

  return (
    <div>
        <button onClick={addrun}>Add Score</button>
        <table>
            <thead>
                <tr>
                <th>Balls</th>
                <th>Run</th></tr>
            </thead>
            <tbody>
               { balls.map((run,i)=>(<tr key={i}>
                    <td>{i+1}</td>
                      <td>{run}</td>
                </tr>))}
            </tbody>
        </table>
        {balls.length === 6 && <h3>Total Score: {total}</h3>}
        </div>
  )
}

export default Scoreboard