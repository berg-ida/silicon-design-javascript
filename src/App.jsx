import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
