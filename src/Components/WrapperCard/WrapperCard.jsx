import React from 'react'
import pic1 from './card1.png'
import pic2 from './card2.png'
import style from './WrapperCard.module.css'

const WrapperCard = (props) => {
    return (
        <>
            <div className='container'>
                <div className={style.wrapper_container}>
                    <div className={style.wrapper_item}>
                        <div className={style.wrapper_text}>
                            <h3 className={style.title}>Пополнение через Хумо онлайн</h3>
                            <p className={style.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <img className={style.wrapper_img}
                            src={pic1}
                            alt='img'
                        />
                    </div>


                    <div className={style.wrapper_item}>
                        <div className={style.wrapper_text}>
                            <h3 className={style.title}>Пополнение через отделения Хумо</h3>
                            <p className={style.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <img className={style.wrapper_img}
                            src={pic2}
                            alt='img'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrapperCard