import { useState } from "react";
import InputRange from "react-input-range";
import styles from "./Calculator.module.scss";
import "react-input-range/lib/css/index.css";

const Calculator = () => {
  const [activeCourse, setActiveCourse] = useState("TJS");
  const [value, setValue] = useState("50000");

  const getPercent = () => {
    if (activeCourse === "TJS") {
      return "16";
    }
    if (activeCourse === "RUB") {
      return "10";
    }
    if (activeCourse === "USD") {
      return "5";
    }
  };

  const getTotalAmount = () => {
    if (value) {
      return (+value * +getPercent()) / 100 - (((+value * +getPercent()) / 100) * 12) / 100;
    }
    return "";
  };

  const getResult = () => {
    if (value) {
      return parseFloat(+value + getTotalAmount()).toFixed(1);
    }
    return "";
  };

  const handleChange = (e) => {
    e.target.value = e.target.value.replaceAll(" ", "");
    if (e.target.value === "0.") return;

    if (isNaN(+e.target.value)) {
      return;
    }

    if (e.target.value === "") {
      setValue("0");
      return;
    }

    if (value === "0" && value.length === 1) {
      let tmp = e.target.value.slice(1);
      setValue(tmp);
      return;
    }

    if (e.target.value > 2000000) {
      setValue("2000000");
      return;
    } else {
      setValue(e.target.value);
    }
  };

  const handleChangeSlider = (val) => {
    val = val.toString();
    if (val === "") {
      setValue("0");
      return;
    }
    if (value === "0" && value.length === 1) {
      let tmp = val.slice(1);
      setValue(tmp);
      return;
    }
    if (val > 2000000) {
      setValue("2000000");
      return;
    } else {
      setValue(val);
    }
  };

  return (
    <div className={`container ${styles.calculatorContainer}`} id="calculate">
      <h3 className={styles.title}>{`Ваш доход по депозиту «Сарчашма»`}</h3>
      <div className={styles.sliderContainer}>
        <div className={styles.calculateBlock}>
          <div className={styles.calculateTitle}>Сумма депозита:</div>
          <div className={styles.calculate}>
            <input value={value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} onChange={handleChange} />
            <div className={styles.slider}>
              <InputRange
                step={50000}
                formatLabel={(value) => null}
                draggableTrack={false}
                allowSameValues={false}
                maxValue={2000000}
                minValue={0}
                value={+value}
                onChange={(val) => handleChangeSlider(val)}
                onChangeComplete={(args) => console.log(args)}
              />
            </div>
          </div>
        </div>
        <div className={styles.courseContainer}>
          <div className={`${styles.courseTitle}`}>Валюта:</div>
          <div className={`${styles.courses}`}>
            <div
              className={activeCourse === "TJS" ? styles.courseActive : styles.course}
              name="TJS"
              onClick={(e) => setActiveCourse("TJS")}
            >
              TJS
            </div>
            <div
              className={activeCourse === "RUB" ? styles.courseActive : styles.course}
              name="RUB"
              onClick={(e) => setActiveCourse("RUB")}
            >
              RUB
            </div>
            <div
              className={activeCourse === "USD" ? styles.courseActive : styles.course}
              name="USD"
              onClick={(e) => setActiveCourse("USD")}
            >
              USD
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calculateResult}>
        <div className={styles.totalResult}>
          <div className={styles.totalResultTitle}>За 12 месяцев накопится:</div>
          <div className={styles.amountResult}>
            {getResult().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            <span>{activeCourse}</span>
          </div>
        </div>
        <div className={styles.realResult}>
          <div className={styles.realResultTitle}>Доход за год:</div>
          <div className={styles.realResultAmount}>
            {getTotalAmount()
              .toFixed(1)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            <span>{activeCourse}</span>
          </div>
        </div>
        <div className={styles.percentResult}>
          <div className={styles.percentResultTitle}>Процентная ставка:</div>
          <div className={styles.percent}>{`${getPercent()}%`}</div>
        </div>
      </div>
      <div className={styles.calculateBtn}>
        <a href="tel:544">
          <button>Связаться</button>
        </a>
        <div>
          * Расчет калькулятора предварительный, выполнен с учетом 12% налога. Более точные условия вы узнаете при оформлении
          депозита.
        </div>
      </div>
    </div>
  );
};

export default Calculator;
