import React from "react";
import fb from "./fb.svg";
import "./Footer.css";
import inst from "./inst.svg";
import teleg from "./teleg.svg";
import vk from "./vk.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="hot-line">
        <h1>+992 (44) 640 55 44</h1>
        <p className="footer-description">Горячая линия Хумо</p>
      </div>
      <div className="footer-links">
        <div>
          <h1>
            <a href="https://humo.tj/ru/">Хумо</a>
          </h1>
          <h1>
            <a href="https://online.humo.tj/">Хумо Онлайн</a>
          </h1>
          <h1>
            <a href="https://orzu.humo.tj/">Карта Орзу</a>
          </h1>
        </div>
        <div>
          <h1>
            <a href="https://lahza.humo.tj/">Карта Лахза</a>
          </h1>

          <h1>
            <a href="https://deposit.humo.tj/">Депозит &mdash; Сарчашма</a>
          </h1>
          <h1>
            <a href="https://transfer.humo.tj/">Хумо переводы</a>
          </h1>
        </div>
      </div>
      <div className="footer-paragraph">
        <p className="footer-description">
          Прогрессивная и одна из лидирующих микрофинансовых организаций в
          Таджикистане, предоставляющая банковские услуги более 100 тысячам
          клиентов.
        </p>
        <p className="adress">
          734061, г. Душанбе, ул. Н. Карабаева, 148/1. Тел.: 544
        </p>
      </div>
      <div className="footer-scial-networks">
        <p className="license">
          © 2022 ЗАО МДО «Хумо» Лицензия НБТ №0000077 от 24 мая 2017 г.
        </p>
        <div className="sn-links">
          <p className="footer-description">Следите за нами в соцсетях:</p>
          <div className="sn-logos">
            <a href="https://www.instagram.com/humo.tj/">
              <img src={inst} alt="inst" />
            </a>
            <a href="https://t.me/humocallcenter">
              <img src={teleg} alt="telegram" />
            </a>
            <a href="https://vk.com/humotj">
              <img src={vk} alt="vk" />
            </a>
            <a href="https://facebook.com/mdohumo">
              <img src={fb} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
