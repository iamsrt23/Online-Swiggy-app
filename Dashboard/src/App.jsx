import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './vendorDashboard/Components/NotFound.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      
      
    </div>
  )
}

export default App