import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0agwe2k', 'template_hsremfi', formRef.current, 'Bz7Q1qh01wNGyC-1M')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text)
      });

      e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>romandopurba46@gmail.com</h5>
            <a href="mailto:romando.purba@yahoo.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="text" placeholder="Your Email" name="user_email" required/>
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact