import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Bounties Store, No 4 Oba Street, opposite Amour Filling Station, Adigbe, Abeokuta, Ogun State</p>
          <p>Phone: +00 1234 456789</p>
          <p>Email: bounties@gmail.com</p>
        </div>

        {/* Optional links or info can go here */}
        <div className="footer-info">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Bounties Grocery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
