
import './App.css'
import Accordance from './Project/Accordance'
import CheckEvenorOdd from './Project/CheckEvenorOdd'
import CounterApp from './Project/CounterApp'
import ProgressBar from './Project/Progress'
function App() {

  return (
    <>
      <div>
        <CheckEvenorOdd/>
        <CounterApp/>
       <div style={{padding:"10px"}}><Accordance/></div> 
      </div>
      <div style={{padding:"10px"}}><ProgressBar/></div> 
    </>
  )
}

export default App
