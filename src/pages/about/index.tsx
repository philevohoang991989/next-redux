import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/icons/logo.svg";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementIfOdd,
  incrementSaga,
  selectCount,
} from "@/app/features/counter/counterSlice";
import { Button, Image} from 'antd'

export default function AboutPage() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;
    
  return (
    <div>
      <div className={styles.row}>
        <Image src={Logo.src} alt="Logo" />
      </div>
      <div className={styles.row}>
        <Button className={styles.btnClick} onClick={() => dispatch(decrement())}>-</Button>
        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
        <span className={styles.value}>{count}</span>
        <Button
          className={styles.btnClick}
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button> */}
        <Button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementSaga(incrementValue))}
        >
          Add Async Saga
        </Button>
        <Button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  );
}
