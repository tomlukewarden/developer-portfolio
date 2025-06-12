import "../styles/home.css"
function Header() {
  return (
    <header className="header-gradient shadow">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col text-end">
            <nav className="nav">
              <a href="/" className="nav-link text-light">Home</a>
              <a href="/about" className="nav-link text-light">About</a>
              <a href="/projects" className="nav-link text-light">Projects</a>
              <a href="/blog" className="nav-link text-light">Blog</a>
              <a href="/contact" className="nav-link text-light">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
