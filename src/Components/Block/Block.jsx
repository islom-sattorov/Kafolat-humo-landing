import React from 'react'
import './Block.css'

const Block = () => {
    return (
        <div className="container">
            <div className='header-promo-block'>
                <div className="header-promo-block-content">
                    <h1 className="header-promo-block-title">Установите <span className='.span_item'>Хумо Онлайн,</span>
                        чтобы управлять своим депозитом</h1>
                    <h3 className="header-promo-block-subtitle">
                        Получайте до 17% годовых
                    </h3>
                    <button className="header-promo-btn">Открыть вклад</button>
                </div>
            </div>
        </div>
    )
}

export default Block