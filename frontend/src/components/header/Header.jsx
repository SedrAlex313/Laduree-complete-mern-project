import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SLR from "../../assets/SLR.png";
import Logo from "./Logo";

const Header = () => {
  const [navColor, setNavColor] = useState("transparent");
  const [activeLink, setActiveLink] = useState("Home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <nav>
        <div
          className="nav-container"
          style={{
            backgroundColor: navColor,
            transition: "1s",
          }}
        >
          <Link to="/">
            <Logo />
          </Link>

          <ul className="nav-links">
            {/* < Link to='/signUp'>
              <li >
               <a href="#register">Menu</a>
             </li>
          </Link> */}
            <Link to="/signIn">
              <li style={{ borderRight: "0" }}>
                <a href="#signIn">SignIn</a>
              </li>
            </Link>
            <Link to="/Restaurant">
              <li style={{ borderRight: "0" }}>
                <a href="#Restaurant">Restaurant</a>
              </li>
            </Link>
            <Link to="/Boitque">
              <li style={{ borderRight: "0" }}>
                <a href="#Boitque">Boutique</a>
              </li>
            </Link>
            <Link to="/Menu">
              <li style={{ borderRight: "0" }}>
                <a href="#Menu">Ladurée Menu</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
