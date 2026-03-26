import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  //   let x = 0;//local variable

  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1); // asynchronus
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    console.log("Add", x);
  };
  const onMinus = () => {
    setX((curr) => curr - 1);
    setX((curr) => curr - 1);
    setX((curr) => curr - 1);
    setX((curr) => curr - 1);
    console.log("Minus", x);
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Counter</p>
      <h3 className={styles.display} id="counter_text">
        {x}
      </h3>
      <div className={styles.controls}>
        <button className={`${styles.btn} ${styles.btnAdd}`} onClick={onAdd}>
          +
        </button>
        <button
          className={`${styles.btn} ${styles.btnMinus}`}
          onClick={onMinus}
        >
          −
        </button>
      </div>
    </div>
  );
};
export default Counter;
