import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './Routes'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <main
        className='container  mt-3'
        style={{ 'background-color': '#fffff9' }}
      >
      <Navbar/>
        
        <Routes />
      </main>
    </>
  )
}

export default App
