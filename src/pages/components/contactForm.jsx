import { useState } from "react";
import emailjs from 'emailjs-com';

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_3t4pqaj',           
      'template_klthoga',          
      form,                        
      'B8xBZxJ5MUCCYOYIT'            
    )
    .then(() => {
      alert("Thank you for reaching out! I'll get back to you soon.");
      setForm({ name: "", email: "", company: "", message: "" });
    })
    .catch((error) => {
      alert("There was an error sending your message.");
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <img src="/assets/logo.PNG" alt="computer walking" width={70}/>
        <p>If you have any questions or just want to say hello, feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" value={form.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;