import React from "react";
import './Cards.css';



const Cards = () => {
  const texts = ["Минимальная сумма вклада от 100 сомони", "Срок депозита 365 дней ", "Копите в долларах и сомони", "Начисляем проценты каждый день", "При открытии вклада, дарим карту «Корти Милли»"];

  return (
    <section className="card-container">
      {texts.map((itm, idx) => (
        <article className="card-item" key={idx}>
          <p className="card-text">{itm}</p>
        </article>
      ))}
    </section>
  );
};

export default Cards;
