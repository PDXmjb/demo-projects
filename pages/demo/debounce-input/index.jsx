import { useEffect, useState } from 'react';

const DebounceInput = () => {
  const [value, setValue] = useState('');
  const [valueIsValid, setValueIsValid] = useState(false);
  const [countDown, setCountDown] = useState(5);
  const [valueHasChanged, setValueHasChanged] = useState(false);

  const inputChangeHandler = (event) => {
    setValueHasChanged(true);
    setValue(event.target.value);
    setCountDown(5);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      setValueIsValid(value.trim() !== '');
      setValueHasChanged(false);
    }, 5000);

    const countDownTimer = setInterval(() => {
      if (valueHasChanged) {
        setCountDown((count) => (count > 0 ? count - 1 : count));
      }
    }, 1000);

    return () => {
      clearTimeout(debounce);
      clearInterval(countDownTimer);
    };
  }, [value]);

  return (
    <>
      <h1>Debounce Input</h1>
      <p>
        Input which waits 5s after the user has stopped typing before checking
        if there is any content. Added a countdown timer for funsies.
      </p>
      <div>
        <label htmlFor="debounce-input">Debounce Input:</label>
        <input
          type="text"
          placeholder="Enter some text!"
          id="debounce-input"
          value={value}
          onChange={inputChangeHandler}
        />
        <p>Countdown: {countDown}</p>
        {!valueIsValid ? (
          <p>You need to enter a value.</p>
        ) : (
          <p>You have entered a value! Good job!</p>
        )}
      </div>
    </>
  );
};

export default DebounceInput;
