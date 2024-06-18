import React from 'react';
import { Link } from 'react-router-dom';

const Insights = () => (
    <div>
      <header>
        <h1>Insights</h1>
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
          <h2>Industry Insights</h2>
          <p>Blog posts, whitepapers, and sample outputs...</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Redbridge Consultants. All rights reserved.</p>
      </footer>
    </div>
  );


export default Insights;
