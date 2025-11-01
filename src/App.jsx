import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>



    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
