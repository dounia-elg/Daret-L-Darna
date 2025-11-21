import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

         {/* Auth */}
         <Route path="/register" element={<Register/>} />
      </Routes>
      
    </Router>
  )
}

export default App
