import React from 'react'
import appgallery from './appgallery.svg'
import appstore from './appstore.svg'
import style from './Block.module.css'
import gglplay from './gglplay.svg'
import phone from './img.svg'

const Block = () => {
    return (
        <div className={style.test}>
            <div className={style.block_container}>
                <div className={style.text_container}>
                    <h2>Установите <span>Хумо Онлайн,</span> чтобы управлять своим депозитом</h2>
                    <div className={style.block_btns}>
                        <img src={gglplay} className={style.block_btn_btn} alt="ggl" />
                        <img src={appstore} className={style.block_btn_btn} alt="ggl" />
                        <img src={appgallery} className={style.block_btn_btn} alt="ggl" />
                    </div>
                </div>
                <img className={style.phone} src={phone} />
            </div>
        </div>
    )
}

export default Block