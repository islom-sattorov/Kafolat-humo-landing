import React from 'react';
import style from './BlockTest.module.css';

const BlockTest = () => {
    return (
        <div className={style.block_container}>
            <div className={style.text_container}>
        h2
            </div>
            <img src='#' />
        </div>
    );
}

export default BlockTest