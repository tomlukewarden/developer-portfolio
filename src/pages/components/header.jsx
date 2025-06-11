import "../styles/home.css"
function Header() {
  return (
    <header className="header-gradient shadow">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col text-end">
            <nav className="nav">
              <a href="/" className="nav-link text-dark">Home</a>
              <a href="/about" className="nav-link text-dark">About</a>
              <a href="/contact" className="nav-link text-dark">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
