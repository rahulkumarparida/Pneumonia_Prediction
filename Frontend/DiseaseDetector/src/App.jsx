import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PneumoniaPatients from './components/Pneumonia'
import Detector from './components/detector'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-cyan-200 h-[100%] '>
      <Navbar />
      <Home />
      <Detector />
      <PneumoniaPatients/>
      <Footer/>
    </div>
  )
}

export default App
