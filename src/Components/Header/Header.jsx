import React from 'react';
import { Link, spy } from "react-scroll";
import style from "./Header.module.css";

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
                    {/* <img src={ellipse} className={style.header_ellipse} alt="ellipse" /> */}
                    {/* <img src={percent} className={style.header_percent} alt="percent" /> */}
                    <svg className={style.header_ellipse} width="250" height="500" viewBox="0 0 250 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_416_2616)">
                            <circle cx="250" cy="250" r="250" fill="url(#paint0_linear_416_2616)" fillOpacity="0.4" />
                        </g>
                        <defs>
                            <filter id="filter0_b_416_2616" x="-64" y="-64" width="628" height="628" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_416_2616" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_416_2616" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_416_2616" x1="87.5" y1="63.3333" x2="447.5" y2="415.625" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF5A1E" />
                                <stop offset="0.401042" stopColor="#F37034" stopOpacity="0.64" />
                                <stop offset="1" stopColor="#F0833A" stopOpacity="0.56" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg className={style.header_percent} width="600" height="232" viewBox="0 0 600 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_ii_416_2610)">
                            <path d="M45.1947 228.556V21.9517L67.792 44.549H0V2.58254H97.4914V228.556H45.1947Z" fill="url(#paint0_linear_416_2610)" />
                            <path d="M172.903 228.556L263.938 22.5973L277.496 45.1947H155.793L179.036 20.6604V81.9961H132.55V2.58254H313.652V36.4786L229.719 228.556H172.903Z" fill="url(#paint1_linear_416_2610)" />
                            <path d="M370.798 228.556L525.106 2.58254H563.521L409.214 228.556H370.798ZM390.49 124.608C379.514 124.608 369.83 122.133 361.437 117.183C353.043 112.018 346.372 104.809 341.422 95.5545C336.687 86.0851 334.32 75.0017 334.32 62.3041C334.32 49.6066 336.687 38.6307 341.422 29.3765C346.372 20.1224 353.043 12.9128 361.437 7.74766C369.83 2.58255 379.514 0 390.49 0C401.466 0 411.151 2.58255 419.544 7.74766C427.937 12.9128 434.501 20.1224 439.236 29.3765C443.971 38.6307 446.338 49.6066 446.338 62.3041C446.338 75.0017 443.971 86.0851 439.236 95.5545C434.501 104.809 427.937 112.018 419.544 117.183C411.151 122.133 401.466 124.608 390.49 124.608ZM390.49 98.1371C397.592 98.1371 403.295 95.2317 407.6 89.4209C411.904 83.395 414.056 74.356 414.056 62.3041C414.056 50.2522 411.904 41.3209 407.6 35.5101C403.295 29.4841 397.592 26.4712 390.49 26.4712C383.603 26.4712 377.9 29.4841 373.381 35.5101C369.077 41.3209 366.924 50.2522 366.924 62.3041C366.924 74.1408 369.077 83.0722 373.381 89.0981C377.9 95.1241 383.603 98.1371 390.49 98.1371ZM543.829 231.139C533.069 231.139 523.384 228.664 514.776 223.714C506.382 218.549 499.818 211.339 495.084 202.085C490.349 192.616 487.982 181.532 487.982 168.834C487.982 156.137 490.349 145.161 495.084 135.907C499.818 126.653 506.382 119.443 514.776 114.278C523.384 109.113 533.069 106.53 543.829 106.53C555.021 106.53 564.813 109.113 573.206 114.278C581.599 119.443 588.163 126.653 592.898 135.907C597.633 145.161 600 156.137 600 168.834C600 181.532 597.633 192.616 592.898 202.085C588.163 211.339 581.599 218.549 573.206 223.714C564.813 228.664 555.021 231.139 543.829 231.139ZM543.829 204.667C550.931 204.667 556.635 201.762 560.939 195.951C565.243 189.925 567.395 180.886 567.395 168.834C567.395 156.998 565.243 148.066 560.939 142.04C556.635 136.015 550.931 133.002 543.829 133.002C536.943 133.002 531.24 136.015 526.72 142.04C522.416 147.851 520.264 156.783 520.264 168.834C520.264 180.886 522.416 189.925 526.72 195.951C531.24 201.762 536.943 204.667 543.829 204.667Z" fill="url(#paint2_linear_416_2610)" />
                        </g>
                        <defs>
                            <filter id="filter0_ii_416_2610" x="0" y="-4" width="600" height="239.139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_416_2610" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                                <feBlend mode="normal" in2="effect1_innerShadow_416_2610" result="effect2_innerShadow_416_2610" />
                            </filter>
                            <linearGradient id="paint0_linear_416_2610" x1="25.5" y1="231" x2="585.5" y2="2.88811e-06" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F0833A" />
                                <stop offset="1" stopColor="#FF5A1E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_416_2610" x1="25.5" y1="231" x2="585.5" y2="2.88811e-06" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F0833A" />
                                <stop offset="1" stopColor="#FF5A1E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_416_2610" x1="25.5" y1="231" x2="585.5" y2="2.88811e-06" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F0833A" />
                                <stop offset="1" stopColor="#FF5A1E" />
                            </linearGradient>
                        </defs>
                    </svg>

                </article>
            </div>
        </header>
    )
}

export default Header