import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
function App() {

}
  const [count, setCount] = useState(0)

  return 
    <div className='mb-20'>

      {/* Navbar  */}
        <navabar/> 

      {/* Hero Section */}
        <hero/>
      
      {/* Features Section */}
        <feature/>
      
      {/* Footer Section */}
        <footer/>

    </div>
      
export default App