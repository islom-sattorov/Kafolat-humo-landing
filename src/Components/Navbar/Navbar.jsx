import React from "react";
import { Link, spy } from 'react-scroll';
import humoLogo from "./main-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" navbar-container">
      <div className="container">
        <nav className="navbar">
          <a href="https://humo.tj/ru/" target="_blank" rel="noopener noreferrer">
            <img className="navbar-logo" src={humoLogo} alt="logo" />
          </a>
          <ul className="navbar-links">
            <li>
              <Link
                activeClass="active"
                to="Cards"
                spy={spy}
                smooth={true}
                duration={500}
                className="nav-link" href="#top">
                Преимущества
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Calculator"
                spy={spy}
                smooth={true}
                duration={500}
                className="nav-link" href="#top">
                Калькулятор
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Protection"
                spy={spy}
                smooth={true}
                duration={500}
                className="nav-link" href="#top">
                Пополнение
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="NumberedCard"
                spy={spy}
                smooth={true}
                duration={500}
                className="nav-link" href="#top">
                Открытие вклада
              </Link>
            </li>
          </ul>

          <h2>
            <a className="tel-number" href="tel:+992(44)6405544">
              +992 (44) 640 55 44
            </a>
          </h2>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
