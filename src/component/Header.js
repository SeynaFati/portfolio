import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/hey.webp" alt="Hello-pic" className="header-picture" />
      <div className="header-description">
        <h1 className="header-title"> Fati Seynabou </h1>
        <h2 className="header-subtitle">Web Développeuse</h2>
      </div>
    </header>
  );
};

export default Header;
