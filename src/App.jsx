import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Statistics from './components/Footer'
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/statistics" element={<Statistics />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
