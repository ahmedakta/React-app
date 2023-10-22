import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar.js'
import Home from './Home.jsx'
import About from './About';
import Posts from './Posts';
import Footer from './Footer';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm}/>
      <Home />
      <About />
      <Posts searchTerm={searchTerm}/>
      <Footer />
    </div>
  );
}

export default App;
