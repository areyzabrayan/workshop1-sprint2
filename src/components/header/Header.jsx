import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { listLinks } from "../../data/data";
import menu from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import "./header.scss";

const Header = () => {
  const links = listLinks;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__div">
        <figure className="header__figure">
          <img className="header__figure-img" src={logo} alt="img" />
        </figure>
        <nav className={`header__links ${isOpen && "open"}`}>
          {links.map((titulo, index) => (
            <span className="header__span" key={index}>
              {titulo.title}
            </span>
          ))}
        </nav>
        <figure className="header__menuH" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? close : menu} alt="menu" />
        </figure>
      </div>

      <h1 className="header__title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </header>
  );
};

export default Header;
