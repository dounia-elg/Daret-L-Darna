import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

         {/* Auth */}
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
      
    </Router>
  )
}

export default App
