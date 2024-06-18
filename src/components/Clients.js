import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <div>
      <header>
        <h1>Our Clients</h1>
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
          <h2>Clients We Have Worked With</h2>
          <p>Some of the clients we have worked with in different capacities...</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Redbridge Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Clients;
