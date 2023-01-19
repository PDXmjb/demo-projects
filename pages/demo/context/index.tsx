import { useContext } from 'react';
import DemoContext, {
  DemoContextProvider,
} from '../../../components/context/demo-context';

const ContextDemo = () => {
  return (
    <>
      <h2>Context Demo</h2>
      <p>
        Counter which adds/subtracts one, but uses context to manage the count
        state.
      </p>
      <div
        style={{
          border: '1px solid gray',
          borderRadius: '16px',
          padding: '16px',
        }}
      >
        <DemoContextProvider>
          <ContextDemoDisplay />
        </DemoContextProvider>
      </div>
    </>
  );
};

const ContextDemoDisplay = () => {
  const { count } = useContext(DemoContext);
  return (
    <>
      <p>Count: {count}</p>
      <ContextDemoButtons />
    </>
  );
};

const ContextDemoButtons = () => {
  const { setCount } = useContext(DemoContext);

  return (
    <>
      <button
        style={{ margin: '8px' }}
        onClick={() => setCount((count) => count + 1)}
      >
        +1
      </button>
      <button
        style={{ margin: '8px' }}
        onClick={() => setCount((count) => count - 1)}
      >
        -1
      </button>
    </>
  );
};

export default ContextDemo;
