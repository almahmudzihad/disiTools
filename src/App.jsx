import { useState } from 'react'

import './App.css'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Rating from './component/Rating'
import GetStart from './component/GetStart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Hero />
      <Rating />

      <GetStart />
      
    </>
  )
}

export default App
