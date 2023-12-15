import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Services from './components/Services'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='navbar'>
        <Navbar />
      </div>
      <div>
        <HomePage />
        <Services />
        <Home />
      </div>
    </>





  )
}

export default App
