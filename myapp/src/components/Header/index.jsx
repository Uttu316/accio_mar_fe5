import { memo } from "react";
import logo from "../../assets/react.svg";
import "./header.css";
function Header({ title }) {
  return (
    <header className="app_header_container">
      <div className="app_header_logo">
        <img src={logo} alt="logo" />
        <h2>{title || "My App"}</h2>
      </div>
      <nav className="app_navbar">
        <a>About</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}

export default memo(Header);
