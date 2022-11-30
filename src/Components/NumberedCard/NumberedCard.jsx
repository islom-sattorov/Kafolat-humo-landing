import React from "react";
import style from "./NumberedCard.module.css";

const NumberedCard = (props) => {
    return (
        <>
            <article className={style.num__card__item}>
                <span className={style.num}>{props.num}</span>
                {/* <h3 className={style.title}>{props.title}</h3> */}
                {/* <p className={style.subtitle}>{props.subtitle}</p> */}
                <p className={style.titleSecond}>{props.titleSecond}</p>
            </article>
        </>
    )
}

export default NumberedCard;
