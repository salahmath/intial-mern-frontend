import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './pages/Layout';
import LOGIN_REGISTER from './ode/test';
import Home from './pages/home';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>

       
        <Route path="/home" element={<Home />} />
        <Route path="/log" element={<LOGIN_REGISTER />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
{/*         <PrivateRoute path="/dashboard" element={<Dashboard />} />
 */}      </Routes>
    </Router>
  );
}

export default App;
