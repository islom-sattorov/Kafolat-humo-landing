import React, { useEffect, useState } from "react";
import style from './ScrollBtn.module.css';
import useMountTransition from "./useMountTransition";

const ScrollBtn = () => {
    const [visible, setVisible] = useState(false)
    const hasTransitionedIn = useMountTransition(visible, 1000)

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

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    }, [])


    return (
        <>
            {(hasTransitionedIn || visible) && (
                <button
                    className={`${style.btn_to_top} ${hasTransitionedIn && style.in} ${visible && style.visible}`}
                    onClick={scrollToTop}>
                    {/* <img src={arrow} alt='moveToTopBtn' /> */}
                    <svg className={style.arrow} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 477.175 477.175" style={{ stroke: "#fff", fill: "none", }} xmlSpace="preserve">
                        <g>
                            <path strokeWidth='60' d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		" style={{ fill: "white" }} />
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>
                </button>
            )
            }
        </>
    )
}
export default ScrollBtn

