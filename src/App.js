import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js';
import Services from './components/Services.js';
import Clients from './components/Clients.js';
import Insights from './components/Insights.js'
import Contact from './components/Contact.js';
import './styles.css';


function App() {
 
  return (
   
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/insights' element={<Insights/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
   
  );
}

export default App;
