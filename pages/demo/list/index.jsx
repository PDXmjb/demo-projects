import { useState, Children } from 'react';
import styles from './List.module.scss';

const List = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addItemHandler = (event) => {
    event.preventDefault();
    setList((list) => [...list, input]);
    setInput('');
  };

  const removeItem = (index) => {
    let currentList = [...list];
    currentList.splice(index, 1);
    setList(currentList);
  };

  return (
    <>
      <h2>List</h2>
      <p>
        A basic component which allows adding a new item to a list of items.
        Clicking on an item removes it from the list.
      </p>
      <form className={styles['list-input-box']} onSubmit={addItemHandler}>
        <input
          type="text"
          value={input}
          placeholder="Input some text!"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addItemHandler}>Submit</button>
      </form>
      <ul className={styles['element-list']}>
        {Children.toArray(
          list.map((item, index) => (
            <li onClick={() => removeItem(index)}>{item}</li>
          ))
        )}
      </ul>
    </>
  );
};

export default List;
