import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main';
import {BrowserRouter, Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Protfolio from './pages/Protfolio';
const App = () => {
  return (
   <BrowserRouter>
      <Sidebar/>
      <Router>
      <Routes>
         <Route path='/dashboard' element={<Dashboard/>}/ >
         <Route path='/protfolio' element={<Protfolio/>}/ >

      </Routes>
      </Router>
    </BrowserRouter>
  )
}

export default App
