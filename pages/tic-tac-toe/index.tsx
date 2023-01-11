import { Children, useState } from 'react';
import styles from './index.module.scss';

const checkForWin = (grid: number[], currentPlayerValue: number): boolean => {
  // Rows: [0, 1, 2], [3, 4, 5], [6, 7, 8]
  // Columns: [0, 3, 6], [1, 4, 7], [2, 5, 8]
  // Diagonals: [0, 4, 8], [2, 4, 6]

  const potentialSolutionsArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const victory =
    potentialSolutionsArray
      .map((solution) => {
        return (
          grid[solution[0]] === grid[solution[1]] &&
          grid[solution[0]] === grid[solution[2]] &&
          grid[solution[0]] === currentPlayerValue
        );
      })
      .indexOf(true) > 0;

  return victory;
};

const TicTacToe = () => {
  const defaultGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [grid, setGrid] = useState(defaultGrid);
  const [currentPlayerValue, setCurrentPlayerValue] = useState(-1);
  const [playerVictory, setPlayerVictory] = useState(0);
  const mapValue = (value: any) =>
    value === 0 ? '' : value === -1 ? 'X' : 'O';
  const onClickHandler = (index: number) => {
    if (grid[index] !== 0) {
      return;
    }

    let currGrid = [...grid];
    currGrid[index] = currentPlayerValue;
    setGrid(currGrid);

    const victory = checkForWin(currGrid, currentPlayerValue);
    victory ? setPlayerVictory(currentPlayerValue) : togglePlayerValue();
  };

  const togglePlayerValue = () => {
    setCurrentPlayerValue((value) => value * -1);
  };

  const restartHandler = () => {
    setCurrentPlayerValue(-1);
    setPlayerVictory(0);
    setGrid(defaultGrid);
  };

  return (
    <>
      TicTacToe
      {playerVictory !== 0 ? <p>{`${mapValue(playerVictory)} wins!`}</p> : null}
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
      <button onClick={restartHandler}>Restart</button>
    </>
  );
};

export default TicTacToe;
