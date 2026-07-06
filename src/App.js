import React from 'react'

import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from './auth/Register'
import Quiz from './pages/Quiz'
import Quiz2 from './pages/Quiz2'
import Result from './pages/Result'
import Login from './auth/Login'
import {auth} from './auth/fbconfig';
import Admin from './pages/Admin';
import Home from './pages/Home';



const App = () => {

  const user = auth.currentUser;

  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={ user ? <Quiz /> : <Navigate to="/mcqapp/login" /> } />
          <Route path="/mcqapp/register" element={<Register />} />
          <Route path="/mcqapp/login" element={<Login />} />
          <Route path="/mcqapp/result" element={<Result />} />
          {/* <Route path="/admin" element={ <Admin /> } /> */}
          <Route path="/mcqapp/quiz1" element={<Quiz />} />
          <Route path="/mcqapp/quiz2" element={<Quiz2 />} />
          <Route path="/mcqapp/home" element={<Home /> } />
        </Routes>
      </div>
    </Router>

  )
}

export default App
