import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <p>Fati Seynabou</p>
      <nav className="navbar-links">
        <ul>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
