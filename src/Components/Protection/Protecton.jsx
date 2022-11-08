import React from "react";
import Logo from "./logo_idif 2.png";
import './Protecton.css';
export default function Protection() {

    return (
        <div className="container">
            <div className="protec-container">
                <div className="protec-image">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="protec-content">
                    <h4>Хумо - член Фонда страхования сбережений физических лиц</h4>
                    <p>C 2013 года ЗАО МДО “Хумо” является членом Фонда страхования сбережений физических лиц.
                        Ваши вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц».
                        Более подробная информация на сайте <a className="protec-link" target='_blank' rel="noopener noreferrer" href="http://idif.tj/">www.idif.tj</a></p>
                </div>
            </div>
        </div>
    );
}