import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar.js'
import Home from './Home.jsx'
import About from './About';
import Posts from './Posts';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
