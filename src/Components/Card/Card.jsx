import React from "react";
import './Card.css';
import card1 from './illustration.png';


const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-item">
        <img src={card1}
          alt="none" />
        <h3 className='card-title-text'>Ставка 17%</h3>
        <p className="card-subtitle">Годовых</p>
      </div>
      <div className="card-item">
        <img src={card1}
          alt="none" />
        <h3 className='card-title-text'>от 3000 сомони</h3>
        <p className="card-subtitle">сумма вклада</p>
      </div>
      <div className="card-item">
        <img src={card1}
          alt="none" />
        <h3 className='card-title-text'>до 30 сентября</h3>
        <p className="card-subtitle">успейте оформить</p>
      </div>
    </div>
  );
};

export default Card;
