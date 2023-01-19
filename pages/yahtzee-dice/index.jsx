import { Children, useCallback, useEffect, useState } from 'react';
import styles from './yahtzee.module.scss';

const rollDice = (numDice) => {
  let tempArray = [];
  for (let i = 0; i < numDice; i++) {
    tempArray.push(Math.ceil(Math.random() * 6));
  }

  return tempArray.sort((a, b) => a - b);
};

const YahtzeeDice = () => {
  const [dice, setDice] = useState([]);
  const [numDice, setNumDice] = useState(6);
  const [heldDice, setHeldDice] = useState([]);
  const [rollCount, setRollCount] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setDice(rollDice(numDice));
    setHeldDice([]);
    setReset(false);
    setRollCount(0);
  }, [numDice, reset]);

  const handleKeypress = (event) => {
    console.log(event);
  };

  const dieClick = (index) => {
    const tempArray = [...dice];
    const val = tempArray.splice(index, 1);
    setHeldDice((held) => [...held, val[0]]);
    setDice([...tempArray]);
  };

  const heldDieClick = (index) => {
    const tempArray = [...heldDice];
    const val = tempArray.splice(index, 1);
    setDice((dice) => [...dice, val[0]]);
    setHeldDice([...tempArray]);
  };

  const rerollHandler = () => {
    setDice(rollDice(dice.length));
    setRollCount((count) => count + 1);
  };

  const takeNumber = (value) => {
    const addToHeld = [...dice].filter((current) => current === value);
    const tempArray = [...dice].filter((current) => current !== value);
    setHeldDice((held) => [...held, ...addToHeld].sort((a, b) => a - b));
    setDice([...tempArray]);
  };

  return (
    <div className={styles.yahtzee}>
      <div className={styles.input}>
        <label htmlFor="dice-input">Number of Dice: </label>
        <input
          id="dice-input"
          type="number"
          onChange={(event) => setNumDice(event.target.value)}
          value={numDice}
        ></input>
      </div>
      <div className={styles['die-group']}>
        {Children.toArray(
          dice.map((die, index) => (
            <div className={styles.die} onClick={() => dieClick(index)}>
              {die}
            </div>
          ))
        )}
      </div>
      <button onClick={rerollHandler}>Re-roll above</button>
      <button onClick={() => takeNumber(1)}>Take 1s</button>
      <button onClick={() => takeNumber(2)}>Take 2s</button>
      <button onClick={() => takeNumber(3)}>Take 3s</button>
      <button onClick={() => takeNumber(4)}>Take 4s</button>
      <button onClick={() => takeNumber(5)}>Take 5s</button>
      <button onClick={() => takeNumber(6)}>Take 6s</button>
      <div className={styles['die-group']}>
        {Children.toArray(
          heldDice.map((die, index) => (
            <div className={styles.die} onClick={() => heldDieClick(index)}>
              {die}
            </div>
          ))
        )}
      </div>
      <div className={styles['reset-div']}>
        <span>{`Count: ${rollCount}`}</span>
        <button onClick={() => setReset(true)}>Reset</button>
      </div>
    </div>
  );
};

export default YahtzeeDice;
