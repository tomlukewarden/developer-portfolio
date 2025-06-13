import { Link } from 'react-router-dom';
import "../styles/components/header.css";

function Header() {
  return (
    <header className="header-gradient shadow">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col text-end">
            <nav className="nav">
              <Link to="/" className="nav-link text-light">Home</Link>
              <Link to="/about" className="nav-link text-light">About</Link>
              <Link to="/projects" className="nav-link text-light">Projects</Link>
              <Link to="/blog" className="nav-link text-light">Blog</Link>
              <Link to="/contact" className="nav-link text-light">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
