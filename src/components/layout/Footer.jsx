// components/Footer.jsx
import React from "react";
import "./Footer.css"
export default function Footer() {
  return(

    <>
    <footer className="footer">
      <div className="footer-section">
        <div className="logo">
          <img src="path-to-logo.png" alt="FoodMart Logo" />
          <h3>
            FOODMART
            <br />
            GROCERY STORE
          </h3>
        </div>
        <div className="social-icons">
          <span>🌐</span>
          <span>📹</span>
          <span>📷</span>
          <span>👤</span>
        </div>
      </div>
      <div className="footer-section">
        <h4>Ultras</h4>
        <ul>
          <li>About us</li>
          <li>Conditions</li>
          <li>Our journals</li>
          <li>Careers</li>
          <li>Affiliate Programme</li>
          <li>Ultras Press</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Customer Service</h4>
        <ul>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Returns & Refunds</li>
          <li>Cookie Guidelines</li>
          <li>Delivery Information</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Customer Service</h4>
        <ul>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Returns & Refunds</li>
          <li>Cookie Guidelines</li>
          <li>Delivery Information</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Subscribe Us</h4>
        <p>
          Subscribe to our newsletter to get updates about our grand offers.
        </p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Email Address"
            className="email-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </footer>
  </>
  )
}
