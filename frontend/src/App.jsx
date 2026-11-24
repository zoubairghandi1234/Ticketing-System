import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Login from './pages/auth/Login'
import CustomerDashboard from './pages/customer/Dashboard'
import CustomerLayout from "./layouts/CustomerLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";

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

        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="dashboard" element={<CustomerDashboard />} />
          
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
