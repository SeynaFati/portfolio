import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-up">
          <p>Si vous souhaitez discuter, n'hésitez pas à me contacter !</p>
          <a href="mailto:tonemail@example.com" className="contact-link">
            📧 Envoyer un mail
          </a>
          <a href="tel:+330123456789" className="contact-link">
            📞 Appeler
          </a>
          <a href="/CV.pdf" target="_blank" className="contact-link">
            Consultez mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
