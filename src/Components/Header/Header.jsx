import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header-promo-block">
        <div className="header-promo-block-content">
          <h1 className="header-promo-block-title">Кафолат ва даромад</h1>
          <h3 className="header-promo-block-subtitle">
            Получайте до 17% годовых
          </h3>
          <button className="header-promo-btn">Открыть вклад</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
