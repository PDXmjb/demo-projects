import { useState } from 'react';

const TestExample = () => {
  return (
    <>
      <h1>Tests Example</h1>
      <SubComponent></SubComponent>
    </>
  );
};

export default TestExample;

const SubComponent = () => {
  const handler = () => {
    setCount((currCount) => currCount + 1);
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <Button handler={handler}></Button>
    </>
  );
};

const Button = ({ handler }) => {
  return <button onClick={handler}>Add one</button>;
};
