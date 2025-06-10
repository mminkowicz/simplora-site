// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Clients from './components/Clients';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './assets/styles.css';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Platforms />
      <Services />
      <Clients />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
