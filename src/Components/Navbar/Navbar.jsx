import React from "react";
import { Link, spy } from 'react-scroll';
import humoLogo from "./main-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" navbar-container">
      <div className="container">
        <div className="navbar">
          <a href="https://humo.tj/ru/" target="_blank" rel="noreferrer">
            <img className="navbar-logo" src={humoLogo} alt="#" />
          </a>
          <ul className="navbar-links">
            <li>
              <Link
                activeClass="active"
                to="NumberedCard1"
                spy={spy}
                smooth={true}
                duration={500}
                className="nav-link" href="#top">
                Преимущества
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="#top">
                Калькулятор
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="WrapperCard"
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
                to="NumberedCard2"
                spy={spy}
                smooth={true}
                duration={500}

                className="nav-link" href="#top">
                Открытие вклада
              </Link>
            </li>
          </ul>
          <span className="tel-number">
            <a href="tel:+992(44)6405544">+992 (44) 640 55 44</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
