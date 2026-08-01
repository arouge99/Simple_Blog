  import { Link } from "react-router-dom";

  export default function NavbarFrame() {
    return (
      <header className="navbar">
        <Link className="navbar-logo" to="/">
          Realworld Blog
        </Link>
  
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>
    );
  }  