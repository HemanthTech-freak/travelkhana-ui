import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-branding">
          <img src="/Assets/img/logo.png" alt="Travelkhana Logo" className="footer-logo" />
          <p className="footer-description">
            Travelkhana provides convenient and quality food delivery on trains across India. Bringing delicious meals to your seat.
          </p>
        </div>

     
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@travelkhana.com">support@travelkhana.com</a></p>
          <p>Phone: +91-888-003-1313</p>
        </div>

    
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Travelkhana. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
