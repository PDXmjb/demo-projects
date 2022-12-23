import { useState, Children } from 'react';

const List = () => {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addItemHandler = () => {
    setList((list) => [...list, input]);
    setInput('');
  };

  const removeItem = (event) => {
    setList((list) => list.filter((value) => value != event.target.innerHTML));
  };

  return (
    <>
      <h2>List</h2>
      <p>
        A basic component which allows adding a new item to a list of items.
        Clicking on an item removes it from the list.
      </p>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addItemHandler}>Submit</button>
      <ul>
        {Children.toArray(
          list.map((item, index) => <li onClick={removeItem}>{item}</li>)
        )}
      </ul>
    </>
  );
};

export default List;
