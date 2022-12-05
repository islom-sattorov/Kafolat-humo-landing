import React from 'react';
import style from './test.module.css';

const cardsData = [
    { id: 1, number: 1, title: "Посетите любой филиал Хумо, для получения консультации" },
    { id: 2, number: 2, title: "Предоставьте паспорт РТ, ИНН, а также заявление на открытие счета" },
    { id: 3, number: 3, title: "Внесите первый вклад в филиале или в Хумо Онлайн" },
];

export const NumberedCardTest = () => {
    const renderedCards = cardsData && cardsData.map(item => (
        <article key={item.id} className={style.num__card__item}>
            <span className={style.num}>{item.number}</span>
            <p className={style.titleSecond}>{item.title}</p>
        </article>
    ))

    return (
        <section className={style.card_items}>
            {renderedCards}
        </section>
    )
}