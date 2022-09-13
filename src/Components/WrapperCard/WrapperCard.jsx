import React from 'react'
import style from './WrapperCard.module.css'

const WrapperCard = (props) => {
    return (
        <>
            <div className={style.wrapper_item}>
                <div className={style.wrapper_text}>
                    <h3 className={style.title}>{props.title}</h3>
                    <p className={style.subtitle}>{props.subtitle}</p>
                </div>
                <img
                    src={props.src}
                    alt='img'
                />
            </div>
        </>
    )
}

export default WrapperCard