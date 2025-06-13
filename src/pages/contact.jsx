import Header from "./components/header";
import Footer from "./components/footer";
import Bubbles from "./components/bubbles";
import ContactForm from "./components/contactForm";
import "./styles/contact.css";

function Contact() {
  return (
    <div>
      <Bubbles />
      <div className="contact-wrapper">
      <Header />
      <ContactForm/>
      <Footer/>
      </div>
    </div>
  );
}
export default Contact;