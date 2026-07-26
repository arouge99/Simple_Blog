export default function NavbarFrame() {
    return (
      <header className="navbar">
        <a className="navbar-logo" href="/">
          Realworld Blog
        </a>
  
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </header>
    );
  }