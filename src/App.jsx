import { useState } from 'react'

import './App.css'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Rating from './component/Rating'
import GetStart from './component/GetStart'
import ReadyTo from './component/ReadyTo'
import Footer from './component/Footer'
import Pricing from './component/Pricing'
import PremiumTools from './component/PremiumTools'
import { ToastContainer, toast } from 'react-toastify';


const fetchData = async () =>{
  const res = await fetch("/card.json");
  return res.json();
}
const cardData = fetchData();

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Hero />
      <Rating />
      <PremiumTools cardData={cardData} />

      <GetStart />
      <Pricing />
      <ReadyTo />
      <Footer />
      <ToastContainer />

      
      
    </>
  )
}

export default App
