import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Kart from './pages/Kart';
import Home from './pages/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <>

  <Nav/>
<Routes>
<Route path="contact" element={<Contact />} />
<Route path="Home" element={<Home />} />
<Route path="Kart" element={<Kart />} />
</Routes>
   
    </>
  );
}

export default App;
