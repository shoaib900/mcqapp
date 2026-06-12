import React from 'react'

import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from './auth/Register'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Login from './auth/Login'
import {auth} from './auth/fbconfig';
import Admin from './pages/Admin';



const App = () => {

  const user = auth.currentUser;

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Quiz /> } />
          <Route path="/admin" element={ <Admin /> } />
          <Route path="*" element={ user ? <Quiz /> : <Navigate to="/login" /> } />

        </Routes>
      </div>
    </Router>

  )
}

export default App
