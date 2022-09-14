import React from "react";
import appgallery from "./appgallery.svg";
import appstore from "./appstore.svg";
import "./Block.css";
import gglplay from "./gglplay.svg";
import phone from "./phone.svg";

const Block = () => {
  return (
    <div className="block-container">
      <div className="header-promo-block">
        <div className="block-content">
          <div className="header-promo-block-title">
            <h1>
              Установите <span className=".span_item">Хумо Онлайн, </span>
              чтобы управлять своим депозитом
            </h1>
          </div>
          <div className="block-btns">
            <img src={gglplay} className="block-btn-btn" alt="ggl" />
            <img src={appstore} className="block-btn-btn" alt="ggl" />
            <img src={appgallery} className="block-btn-btn" alt="ggl" />
          </div>
        </div>
        <img src={phone} className="block-phone-img" alt="" />
      </div>
    </div>
  );
};

export default Block;
