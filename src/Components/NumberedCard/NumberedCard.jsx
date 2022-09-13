import React from 'react'
import style from './NumberedCard.module.css'

const NumberedCard = (props) => {
    return (
        <>
            <div className={style.num__card__item}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.subtitle}>{props.subtitle}</p>
            </div>
        </>
    )
}

export default NumberedCard