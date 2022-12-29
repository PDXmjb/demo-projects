const JSReducer = () => {
  const input = ['aaa', 'bbbb', 'c', 'ddddddd', 'ee'];
  const reducer = input.reduce((highest, curr) => {
    return curr.length > highest.length ? curr : highest;
  });
  const sortedByLength = [...input].sort((a, b) => a.length - b.length);
  const sortedByLengthDescending = [...input].sort(
    (a, b) => b.length - a.length
  );

  return (
    <>
      <h1>Reducer / Sort</h1>
      <p>
        Takes in an input string, and finds the longest length of string
        contained within it.
      </p>
      <div className={'demo'}>
        <p>{`Input: ${JSON.stringify(input)}`}</p>
        <p>{`Longest item is '${reducer}' which is ${reducer.length} characters long.`}</p>
        <p>{`Sorted by length ascending:  ${JSON.stringify(
          sortedByLength
        )}`}</p>
        <p>{`Sorted by length descending: ${JSON.stringify(
          sortedByLengthDescending
        )}`}</p>
      </div>
    </>
  );
};

export default JSReducer;
