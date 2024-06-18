import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
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
          <h2>Get in Touch</h2>
          <form action="mailto:info@redbridgeconsultancy.org" method="post" enctype="text/plain">
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" /><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="message">Message:</label><br />
            <textarea id="message" name="message"></textarea><br />
            <input type="submit" value="Send" />
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Redbridge Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
