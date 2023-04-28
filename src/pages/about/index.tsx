import React from 'react';
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { decrement, increment, selectCount } from '@/app/features/counter/counterSlice';

export default function AboutPage () {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount);
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
