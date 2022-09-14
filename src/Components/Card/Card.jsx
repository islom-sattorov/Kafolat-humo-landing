import React from "react";
import './Card.css';
import card1 from './illustration.png';

const SectionTest = (props) => {
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
        <h3 className='card-title-text'>Ставка 17%</h3>
        <p className="card-subtitle">Годовых</p>
      </div>
      <div className="card-item">
        <img src={card1}
          alt="none" />
        <h3 className='card-title-text'>Ставка 17%</h3>
        <p className="card-subtitle">Годовых</p>
      </div>
    </div>
  );
};

export default SectionTest;
