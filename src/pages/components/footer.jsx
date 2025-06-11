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
          <img src="src/assets/github.png" alt="GitHub" className="footer-icon" />
          <img src="src/assets/gmail-logo.png" alt="Gmail" className="footer-icon" />
        </span>
      </div>
    </footer>
  );
}
export default Footer;