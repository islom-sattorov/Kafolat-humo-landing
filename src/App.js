import "./App.css";
import Card from "./Components/Card/Card";
import cardImage from "./Components/Card/illustration.png";
import Navbar from "./Components/Navbar/Navbar";
import NumberedCard from "./Components/NumberedCard/NumberedCard";
import Header from "./Components/Header/Header";
import FooterNavbar from "./Components/Footer/FooterNavbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
        <section className="card-items">
          <Card src={cardImage} title="Ставка 17%" subtitle="годовых" />
          <Card
            src={cardImage}
            title="от 3000 сомони"
            subtitle="сумма вклада"
          />
          <Card
            src={cardImage}
            title="до 30 сентября"
            subtitle="успейте оформить"
          />
        </section>
        <h2 className="card-title">Преимущество вкладов в Хумо</h2>
        <section className="card-items">
          <NumberedCard
            title="Управляйте Онлайн"
            subtitle="Вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц»"
          />
          <NumberedCard
            title="Управляйте Онлайн"
            subtitle="Вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц»"
          />
          <NumberedCard
            title="Выбирайте условия"
            subtitle="Вклады будут застрахованы в соответствии с Законом Республики Таджикистан «О страховании вкладов физических лиц»"
          />
        </section>
      </div>
      <FooterNavbar />
      <Footer />
    </>
  );
}

export default App;
