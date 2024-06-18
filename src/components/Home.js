import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Redbridge Consultants</h1>
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
        <section className="hero">
          <h2>Creating a World Where Branding and Communication Research Delivers Business Growth</h2>
        </section>
        <section className="highlights">
          <h3>Our Services</h3>
          <p>We offer a range of services to meet your business needs...</p>
          <Link to="/services" className="btn">Learn More</Link>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Redbridge Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
