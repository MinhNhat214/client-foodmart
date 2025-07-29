import React from "react";
import "./ContactForm.css"
export default function ContactForm() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>
          Get <span className="highlight">25%</span> Discount
          <br /> on your first purchase
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
          amet, metus, sit massa posuere maecenas. Alius ut nunc amet vel
          egestas.
        </p>
      </div>
      <div className="newsletter-form">
        <input type="text" placeholder="Name" className="input-field" />
        <input
          type="email"
          placeholder="Email"
          defaultValue="abc@mail.com"
          className="input-field"
        />
        <label>
          <input type="checkbox" /> Subscribe to the newsletter
        </label>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}
