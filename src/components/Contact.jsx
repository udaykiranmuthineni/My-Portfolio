import React from 'react';
import '../style.css';

const Contact = () => {
  return (
<section id="contact" className="contact-section">
  <h2 className="section-title">Contact</h2>

  <div className="contact-container">
    {/* Left Box */}
   <div className="contact-box">
  <h3 className="contact-box-heading">Let’s Connect👋</h3>

  <div className="contact-box-content">
    <p className="label">📧 Email: udaykiranmuthineni123@gmail.com</p>
    <p className="label">📞 Contact: +91-0123456789</p>
    <p className="label">📍 Location: Hyderabad, India</p>
  </div>
</div>


    {/* Right Contact Form */}
    <div className="contact-form-box">
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Phone (optional)" />
        <textarea rows="1" placeholder="Leave your message..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</section>

  );
};

export default Contact;


