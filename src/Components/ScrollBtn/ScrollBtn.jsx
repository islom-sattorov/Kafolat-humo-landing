import React, { useState } from "react";
import arrow from '../../assets/next_white.svg';
import style from './ScrollBtn.module.css';

const ScrollBtn = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    window.addEventListener('scroll', toggleVisible);


    return (
        <button className={style.btn_to_top} onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}>
            <img src={arrow} alt='moveToTopBtn' />
        </button>
    )
}
export default ScrollBtn