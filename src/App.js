import "./App.css";
import Card from "./Components/Card/Card";
import cardImage from './Components/Card/illustration.png';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="card-items">
        <Card
          src={cardImage}
          title='Ставка 17%'
          subtitle='годовых'
        />
        <Card
          src={cardImage}
          title='от 3000 сомони'
          subtitle='сумма вклада'
        />
        <Card
          src={cardImage}
          title='до 30 сентября'
          subtitle='успейте оформить'
        />
      </section>
    </div>
  );
}

export default App;
