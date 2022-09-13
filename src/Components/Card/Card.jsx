import React from 'react'
import style from './Card.module.css'

const SectionTest = (props) => {
    return (
        <div className={style.card__item}>
            <img src={props.src} alt='' />
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.subtitle}>{props.subtitle}</p>
        </div>
    )
}

export default SectionTest