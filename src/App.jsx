import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './Routes'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <header className='p-0'>
        <Navbar />
      </header>
      <main className='container  mt-3  p-0 '>
        <Routes />
      </main>
    </>
  )
}

export default App
