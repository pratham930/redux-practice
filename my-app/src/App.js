import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Kart from './pages/Kart';
import Home from './pages/Home';
import Nav from './Components/Nav';
import Cart from './pages/Cart';
import NewKart from './pages/NewKart';
import All from './pages/All';

function App() {
  return (
    <>
  <Nav/>
<Routes>
<Route path="contact" element={<Contact />} />
<Route path="Home" element={<Home />} />
<Route path="Kart" element={<Kart />} />
<Route path="Cart" element={<Cart />} />
<Route path="Cart" element={<Cart />} />
<Route path="NewKart" element={<NewKart />} />
<Route path="All" element={<All />} />
</Routes>
   
    </>
  );
}

export default App;
