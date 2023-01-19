import { createContext, Dispatch, SetStateAction, useState } from 'react';

type NameContextType = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

interface NameContextProviderProps {
  children: JSX.Element;
}

const defaultContext = { name: '', setName: () => {} };

const NameContext = createContext<NameContextType>(defaultContext);

export const NameContextProvider = (props: NameContextProviderProps) => {
  const [name, setName] = useState('');
  return (
    <NameContext.Provider value={{ name, setName }}>
      {props.children}
    </NameContext.Provider>
  );
};

export default NameContext;
