
function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <a href="#">Simone</a>
      </div>
      
      <nav>
        <ul className="nav-links">
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;