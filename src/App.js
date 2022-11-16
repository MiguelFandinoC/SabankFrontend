import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import Transaccion from './pages/Transaccion';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/transaccion" element={<Transaccion/>}/>
      </Routes>
    </div>
  );
  }

export default App;
