import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/contact.css";


function Contact() {
  return (
    <>
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>I am here to answer any questions you may have and help you with your needs, feel free to reach out to me :</p>
      <form>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>

      <button type="submit">Send Message</button>
      </form>
     
    </div>

    <footer>
    <p>&copy; 2023 My Portfolio. hope you are successful with your career.</p>
   
  </footer>
    </>
  );
}

export default Contact;
