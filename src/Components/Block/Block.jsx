import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import appgallery from './appgallery.svg'
import appstore from './appstore.svg'
import style from './Block.module.css'
import gglplay from './gglplay.svg'
import phone from './img.svg'

const Block = () => {
    return (
        <div className={style.block_container}>
            <article className={style.text_container}>
                <h2>Установите <span>Хумо Онлайн,</span> чтобы управлять своим депозитом</h2>
                <article className={style.block_btns}>
                    <a href='https://play.google.com/store/apps/details?id=tj.humo.online'>
                        <LazyLoadImage src={gglplay} className={style.block_btn_btn} alt="ggl" />
                    </a>
                    <a href='https://apps.apple.com/ru/app/humo-online/id1242252363'>
                        <LazyLoadImage src={appstore} className={style.block_btn_btn} alt="ggl" />
                    </a>
                    <a href='https://apps.apple.com/ru/app/humo-online/id1242252363'>
                        <LazyLoadImage src={appgallery} className={style.block_btn_btn} alt="ggl" />
                    </a>
                </article>
            </article>
            <img className={style.phone} src={phone} alt='phone' />
        </div>
    )
}

export default Block