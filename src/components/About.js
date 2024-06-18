import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
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
          <h2>Our Story</h2>
          <p>Redbridge was founded in 2018 and we have accomplished so much over the past years...</p>
          <h3>Our Team</h3>
          <p>Meet the core research team in Kenya...</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Redbridge Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
