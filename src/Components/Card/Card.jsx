import React from "react";
import style from "./Card.module.css";

const SectionTest = (props) => {
  return (
    <div className="container">
      <div className={style.card__item}>
        <div className="card-content">
          <img src={props.src} alt="" />
          <h3 className={style.title}>{props.title}</h3>
          <p className={style.subtitle}>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTest;
