import React from 'react';
import { Link, spy } from "react-scroll";
import ellipse from './Ellipse.svg';
import style from "./Header.module.css";
import percent from './percent.svg';


const Header = () => {
    return (
        <header id="Header" className={style.header}>
            <div className={style.container}>
                <article className={style.header_container}>
                    <article className={style.header_text}>
                        <h2 className={style.header_title}>Кафолат ва даромад</h2>
                        <p className={style.header_subtitle}>Получайте до 17% годовых</p>
                        <Link
                            to="NumberedCard"
                            spy={spy}
                            smooth={true}
                            duration={800}
                            className={style.header_btn}>Открыть вклад</Link>
                    </article>
                    <img src={ellipse} className={style.header_ellipse} alt="ellipse" />
                    <img src={percent} className={style.header_percent} alt="percent" />
                </article>
            </div>
        </header>
    )
}

export default Header