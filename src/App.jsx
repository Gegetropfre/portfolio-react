import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './header'
import About from './Home'
import Veilles from './Veilles'
import Contact from './Contact'
import Skills from './Skills'
import SimpleSlider from './Slider'

function App() {


  return (
    <>
      <Header />
      <main>
      <About />
      <Skills>
        <SimpleSlider/> 

      </Skills>
      <Veilles />
      <Contact />
      

      </main>
    </>
  )
}

export default App
