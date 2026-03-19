import logo from "../../assets/react.svg";
import "./header.css";
function Header() {
  return (
    <header className="app_header_container">
      <div className="app_header_logo">
        <img src={logo} alt="logo" />
        <h2>Resume</h2>
      </div>
      <nav className="app_navbar">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
