import React from "react";
import "./App.css";
import Block from "./Components/Block/Block";
import Calculator from './Components/Calculator/Calculator';
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import FooterNavbar from "./Components/Footer/FooterNavbar";
import Header from './Components/Header/Header';
import Navbar from "./Components/Navbar/Navbar";
import NumberedCard from "./Components/NumberedCard/NumberedCard";
// import { NumberedCardTest } from "./Components/NumberedCard/NumberedCardTest";
import Protection from "./Components/Protection/Protecton";
import ScrollBtn from "./Components/ScrollBtn/ScrollBtn";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <h2 id="Cards" className="card-title">
          <span className="card-title-desktop">Преимущества депозита <br />«Кафолат ва даромад»</span>
          <span className="card-title-tablet">Преимущества вкладов в Хумо</span>
        </h2>
        <Cards />
        <h2 id="Calculator" className="card-title">Ваш доход по депозиту</h2>
        <Calculator />
        <h2 id="Protection" className="card-title">Мы защищаем ваш депозит</h2>
        <Protection />
        <h2 id="NumberedCard" className="card-title">
          Открыть вклад легко
        </h2>
        <section className="card-items">
          <NumberedCard
            num={1}
            titleSecond="Посетите любой филиал Хумо, для получения консультации"
          />
          <NumberedCard
            num={2}
            titleSecond="Предоставьте паспорт РТ, ИНН, а также заявление на открытие счета"
          />
          <NumberedCard
            num={3}
            titleSecond="Внесите первый вклад в филиале или в Хумо Онлайн"
          />
          {/* <NumberedCardTest /> */}
        </section>
        <Block />
      </div>
      <FooterNavbar />
      <Footer />
      <ScrollBtn />

    </>
  );
}

export default App;
