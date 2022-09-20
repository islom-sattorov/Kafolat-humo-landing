import React from "react";
import { Link, spy } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div id="Header" className="header-container">
      <div className="header-promo-block">
        <div className="header-promo-block-content">
          <h1 className="header-promo-block-title">Кафолат ва даромад</h1>
          <h3 className="header-promo-block-subtitle">
            Получайте до 17% годовых
          </h3>
          <Link
            activeClass="active"
            to="NumberedCard2"
            spy={spy}
            smooth={true}
            duration={500}
            className="header-promo-btn">Открыть вклад</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
