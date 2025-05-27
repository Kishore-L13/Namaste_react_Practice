
import './App.css'
import CheckEvenorOdd from './Project/CheckEvenorOdd'
import CounterApp from './Project/CounterApp'
import ToggleNav from './Project/ToggleNav'
import Weather_api from './Weather/Weather_api'
import { lazy } from 'react'
function App() {

  return (
    <>
      <div>
        <CheckEvenorOdd/>
        <CounterApp/>
        <div><Weather_api/></div>
      </div>
    </>
  )
}

export default App
