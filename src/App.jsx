import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Dashboard from "./components/dashboard.jsx";

import './App.css'

function App() {

const PrivateRoute = () => {
    const token = localStorage.getItem("token")  
    return token ? <Outlet /> : <Navigate to="/login" />;
}

  return (
    <>
      <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<p>Hello world</p>} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Route>


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
