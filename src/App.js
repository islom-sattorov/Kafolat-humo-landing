import React from "react";
import "./App.css";
import Block from "./Components/Block/Block";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NumberedCard from "./Components/NumberedCard/NumberedCard";
import WrapperImg1 from "./Components/WrapperCard/card1.png";
import WrapperImg2 from "./Components/WrapperCard/card2.png";
import Wrapper from "./Components/WrapperCard/WrapperCard";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        {/* <BlockTest /> */}
        <Card />
        <h2 id="NumberedCard1" className="card-title">
          Преимущество вкладов в Хумо
        </h2>
        <section className="card-items">
          <NumberedCard
            num={1}
            title="Управляйте Онлайн"
            subtitle="Вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц»"
          />
          <NumberedCard
            num={2}
            title="Управляйте Онлайн"
            subtitle="Вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц»"
          />
          <NumberedCard
            num={3}
            title="Выбирайте условия"
            subtitle="Вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц»"
          />
        </section>
        {/* Калькулятор */}
        <h2 className="card-title">Пополняйте вклад, как вам удобно</h2>
        <section className="card-items">
          <Wrapper
            title="Пополнение через Хумо онлайн"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            src={WrapperImg1}
          />
          <Wrapper
            title="Пополнение через отделения Хумо"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src={WrapperImg2}
          />
        </section>
        <h2 className="card-title">Открыть вклад легко</h2>
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
      </div>
      {/* Калькулятор */}
      {/* <Calculator /> */}
      <h2 id="WrapperCard" className="card-title">
        Пополняйте вклад, как вам удобно
      </h2>
      <Wrapper
        title="Пополнение через Хумо онлайн"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        src={WrapperImg1}
      />
      <h2 id="NumberedCard2" className="card-title">
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
      <Footer />
    </>
  );
}

export default App;
