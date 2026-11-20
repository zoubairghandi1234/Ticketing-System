import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Login from './pages/auth/Login'
import CustomerDashboard from './pages/customer/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard />}
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
