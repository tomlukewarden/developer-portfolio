import "../styles/components/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>
          &copy; {new Date().getFullYear()} Tom Warden. All rights reserved.
        </span>
        <span className="footer-links">
          Built with{" "}
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            React
          </a>
  
          <a href="https://github.com/tomlukewarden"><img src="../../../public/assets/github.png" alt="GitHub" className="footer-icon" /></a>
          <a href="https://www.linkedin.com/in/tom-warden-0b3791286/"><img src="../../../public/assets/linkedin.png" alt="LinkedIn" className="footer-icon" /></a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;