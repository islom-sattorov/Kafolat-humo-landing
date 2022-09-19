import React from "react";
import footerStyle from "./FooterNavbar.module.css";

const FooterNavbar = () => {
  return (
    <div className={footerStyle.gray_container}>
      <div className="container">
        <ul className={footerStyle.links}>
          <li>
            <a href="https://humo.tj/ru/about/service/info/">О Хумо</a>
          </li>
          <li>
            <a href="https://humo.tj/ru/about/service/map/">Филиальная сеть</a>
          </li>
          <li>
            <a href="https://job.humo.tj/">Вакансии</a>
          </li>
          <li>
            <a href="https://humo.tj/ru/personal/service/replenishment/">Способы пополнения</a>
          </li>
          <li>
            <a href="https://humo.tj/ru/about/service/contacts/">Наши контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavbar;
