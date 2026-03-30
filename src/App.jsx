import { useState } from 'react'

import './App.css'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Rating from './component/Rating'
import GetStart from './component/GetStart'
import ReadyTo from './assets/ReadyTo'
import Footer from './component/Footer'
import Pricing from './Pricing'
import PremiumTools from './component/PremiumTools'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Hero />
      <Rating />
      <PremiumTools />

      <GetStart />
      <Pricing />
      <ReadyTo />
      <Footer />

      
      
    </>
  )
}

export default App
