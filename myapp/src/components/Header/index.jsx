import { memo } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/react.svg";
import "./header.css";
function Header({ title }) {
  return (
    <header className="app_header_container">
      <div className="app_header_logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <h2>{title || "My App"}</h2>
      </div>
      <nav className="app_navbar">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
    </header>
  );
}

export default memo(Header);
