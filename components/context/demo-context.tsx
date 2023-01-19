import React, { createContext, Dispatch, useState } from 'react';

type Context = {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
};

const DemoContext = createContext<Context>({ count: 0, setCount: () => {} });

type Props = {
  children: JSX.Element;
};

export const DemoContextProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);
  return (
    <DemoContext.Provider value={{ count, setCount }}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContext;
