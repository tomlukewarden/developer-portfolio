import { Link } from 'react-router-dom';
import "../styles/components/header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header-gradient shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/assets/logo.PNG" width={48} alt="Logo" className="me-2" />
          Tom Warden
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link text-light">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
