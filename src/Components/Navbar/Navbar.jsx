import React from "react";
import humoLogo from "./main-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <a href="https://humo.tj/ru/" target="_blank" rel="noreferrer">
          <img className="navbar-logo" src={humoLogo} alt="#" />
        </a>
        <ul className="navbar-links">
          <li>
            <a className="nav-link" href="#top">
              Преимущества
            </a>
          </li>
          <li>
            <a className="nav-link" href="#top">
              Калькулятор
            </a>
          </li>
          <li>
            <a className="nav-link" href="#top">
              Пополнение
            </a>
          </li>
          <li>
            <a className="nav-link" href="#top">
              Открытие вклада
            </a>
          </li>
        </ul>
        <span className="tel-number">
          <a href="tel:+992(44)6405544">+992 (44) 640 55 44</a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
