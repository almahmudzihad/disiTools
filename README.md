# 🛠️ DisiTools

## 📖 Description
DisiTools is a modern and user-friendly web application that provides useful digital tools in one place. It is designed to help users perform daily tasks easily with a clean and responsive interface.

## ⚙️ Technologies Used
- HTML5  
- CSS3 / Tailwind CSS  
- JavaScript  
- React.js  
- Netlify (Deployment)  

## ✨ Features
- 🚀 Fast and responsive user interface  
- 🎯 Easy access to multiple useful tools  
- 📱 Fully responsive for all devices  
- 🌐 Live deployed and accessible from anywhere  
live link ; https://disitools-zihad.netlify.app/














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
  const [cardBuy, setCardBuy] = useState([]);
  

  return (
    <>
      <NavBar cardBuy={cardBuy} />
      <Hero />
      <Rating />
      <PremiumTools cardData={cardData} cardBuy={cardBuy} setCardBuy={setCardBuy} />

      <GetStart />
      <Pricing />
      <ReadyTo />
      <Footer />
      <ToastContainer />

      
      
    </>
  )
}

export default App
