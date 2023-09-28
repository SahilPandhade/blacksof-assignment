import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <NavBar />
        <MainPage /> 
        <Footer/>
      </div>       
    </BrowserRouter>
  )
}

export default App
