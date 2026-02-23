import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1 className="hero-title">Contact Us</h1>
      <p className="hero-subtitle">Have questions? We'd love to hear from you.</p>
      
      <div className="card" style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px' }}>Send us a Message</h3>
        <p style={{ color: 'black', marginBottom: '10px' }}>📧 Email: support@library.com</p>
        <p style={{ color: 'black', marginBottom: '10px' }}>📍 Location:  M304-R708-C111, MRC Blocks</p>
        <p style={{ color: 'black' }}>📞 Phone: +91 392-00076-344</p>
      </div>
    </div>
  );
}

export default Contact;