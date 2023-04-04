import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PriceList from './component/PriceList/PriceList'
import Dashboard from './component/Dashboard/Dashboard'
import PhoneBar from './component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <h1 className='text-7xl font-bold text-red-500 text-center mt-5'>Welcome My Shop</h1> */}
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
