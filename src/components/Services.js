import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <header>
        <h1>Our Services</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Our Clients</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>What We Do</h2>
          <ul>
            <li>Need Identification</li>
            <li>Product Launch</li>
            <li>Concept Development</li>
            <li>Exploratory Research</li>
            <li>Brand Strategy and Guidance</li>
            <li>Creative Development/Communication Testing</li>
            <li>Qualitative and Quantitative Research</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Redbridge Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
