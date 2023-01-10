import { Children, useState } from 'react';
import styles from './index.module.scss';

const TicTacToe = () => {
  const defaultGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [grid, setGrid] = useState(defaultGrid);
  const [currentPlayerValue, setCurrentPlayerValue] = useState(-1);
  const mapValue = (value: any) =>
    value === 0 ? '|' : value === -1 ? 'X' : 'O';
  const onClickHandler = (index: number) => {
    let currGrid = [...grid];
    currGrid[index] = currentPlayerValue;
    setGrid(currGrid);
    togglePlayerValue();
  };

  const togglePlayerValue = () => {
    setCurrentPlayerValue((value) => value * -1);
  };

  return (
    <>
      TicTacToe
      <div className={styles['tic-tac-toe-grid']}>
        {Children.toArray(
          grid.map((value, index) => (
            <div
              onClick={() => onClickHandler(index)}
              className={styles['tic-tac-toe-item']}
            >
              {mapValue(value)}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TicTacToe;
