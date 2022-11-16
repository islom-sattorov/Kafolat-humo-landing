import React from "react";
import "./App.css";
import Block from "./Components/Block/Block";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import FooterNavbar from "./Components/Footer/FooterNavbar";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NumberedCard from "./Components/NumberedCard/NumberedCard";
import Protection from "./Components/Protection/Protecton";
import ScrollBtn from "./Components/ScrollBtn/ScrollBtn";
import Calculator from "./Components/Сalculator/Calculator";

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
        <h2 id="Protection" className="card-title">Мы защищаем ваш депозит</h2>
        <Protection />
        <h2 id="Calculator" className="card-title">Ваш доход по депозиту</h2>
        <Calculator />
        <h2 id="NumberedCard" className="card-title">
          Открыть вклад легко
        </h2>
        <section className="card-items">
          <NumberedCard
            num={1}
            titleSecond="Заполните онлайн-заявку и посетите банк"
          />
          <NumberedCard
            num={2}
            titleSecond="Заполните онлайн-заявку и посетите банк"
          />
          <NumberedCard
            num={3}
            titleSecond="Заполните онлайн-заявку и посетите банк"
          />
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
