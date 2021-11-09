import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag

  return (
    <header>
      <h1 className="logo">Max Said.</h1>
      <h4 className="slogan">Full Stack Developer | Software Engineer</h4>
      <nav className="nav border border-4">
        <Link to="/" class="link-light">
          <div>Home</div>
        </Link>
        <Link to="/about" class="link-light">
          <div>About</div>
        </Link>
        <Link to="/projects" class="link-light">
          <div>Projects</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
