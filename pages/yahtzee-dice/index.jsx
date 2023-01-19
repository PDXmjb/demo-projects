import { Children, useEffect, useState } from 'react';
import styles from './yahtzee.module.scss';

const YahtzeeDice = () => {
  const [dice, setDice] = useState([]);
  const [numDice, setNumDice] = useState(6);
  const [heldDice, setHeldDice] = useState([]);

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < numDice; i++) {
      tempArray.push(Math.ceil(Math.random() * 6));
    }
    setDice(tempArray);
  }, [numDice]);

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

  const reRollHandler = () => {
    let tempArray = [];
    for (let i = 0; i < dice.length; i++) {
      tempArray.push(Math.ceil(Math.random() * 6));
    }
    setDice(tempArray);
  };

  return (
    <>
      <div>
        <label>Number of Dice: </label>
        <input
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
      <button onClick={reRollHandler}>Re-roll</button>
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <div className={styles['die-group']}>
        {Children.toArray(
          heldDice.map((die, index) => (
            <div className={styles.die} onClick={() => heldDieClick(index)}>
              {die}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default YahtzeeDice;
