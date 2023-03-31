import { NavLink } from "react-router-dom";
import Brand from "./logo-temp.svg";
import "./header.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Brand} alt="logo-cig" id="pic" />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li id="blg">
              <NavLink to="/blog">Blog</NavLink>
            </li>

            <li id="cont">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
