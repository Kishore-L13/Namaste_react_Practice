
import './App.css'
import Accordance from './Project/Accordance'
import CheckEvenorOdd from './Project/CheckEvenorOdd'
import CounterApp from './Project/CounterApp'
function App() {

  return (
    <>
      <div>
        <CheckEvenorOdd/>
        <CounterApp/>
       <div style={{padding:"10px"}}><Accordance/></div> 
      </div>
    </>
  )
}

export default App
