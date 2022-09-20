import React from 'react'
import appgallery from './appgallery.svg'
import appstore from './appstore.svg'
import style from './Block.module.css'
import gglplay from './gglplay.svg'
import phone from './img.svg'

const Block = () => {
    return (
        <div className={style.margin_container}>
            <div className={style.block_container}>
                <div className={style.text_container}>
                    <h2>Установите <span>Хумо Онлайн,</span> чтобы управлять своим депозитом</h2>
                    <div className={style.block_btns}>
                        <a href='https://play.google.com/store/apps/details?id=tj.humo.online'>
                            <img src={gglplay} className={style.block_btn_btn } alt="ggl" />
                        </a>
                        <a href='https://apps.apple.com/ru/app/humo-online/id1242252363'>
                            <img src={appstore} className={style.block_btn_btn } alt="ggl" />
                        </a>
                        <a href='https://apps.apple.com/ru/app/humo-online/id1242252363'>
                            <img src={appgallery} className={style.block_btn_btn } alt="ggl" />
                        </a>
                    </div>
                </div>
                <img className={style.phone} src={phone} alt='phone' />
            </div>
        </div>
    )
}

export default Block