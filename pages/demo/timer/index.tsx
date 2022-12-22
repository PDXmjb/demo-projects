import { useCallback, useEffect, useState } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {
  const [time, setTime] = useState(120);
  const [timerStarted, setTimerStarted] = useState(false);

  const startButtonHandler = () => {
    setTimerStarted(true);
  };

  const resetButtonHandler = () => reset();

  const reset = useCallback(() => {
    setTimerStarted(false);
    setTime(120);
  }, []);

  useEffect(() => {
    if (time === 0) {
      reset();
    }
  }, [time, reset]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerStarted) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timerStarted, time]);

  const formattedTime = `0${Math.floor(time / 60)}:${
    time % 60 >= 10 ? time % 60 : '0' + (time % 60)
  }`;

  return (
    <>
      <h2>Timer</h2>
      <p>
        A basic timer applications which counts down from 2 minutes. Resets
        automatically once it reaches 0:00. Clicking the Reset button stops the
        timer and sets the clock back to 2 minutes.
      </p>
      <div className={styles.timer}>
        <div className={styles.formattedTime}>{formattedTime}</div>
        <div className={styles.buttonPane}>
          <button onClick={startButtonHandler}>Start</button>
          <button onClick={resetButtonHandler}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Timer;
