import { useState, createContext, useMemo, useContext } from 'react';

const context = createContext();

const StoreProvider = ({ children, initialState = {} }) => {
  const [store, setStore] = useState(() => initialState);

  const contextValue = useMemo(() => [store, setStore], [store]);
  console.log(contextValue);
  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default function useStore() {
  return useContext(context);
}
export { StoreProvider };
