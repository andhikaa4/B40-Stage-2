import { createContext, useReducer } from "react";

export const CountContext = createContext();

const initialState = {
  qty: 1,
};

const reducer = (_, action) => {
  const { type, payload } = action;

  switch (type) {
      case "ADD_COUNT":
      return {
        qty: payload + 1
        
      };
      case "LESS_COUNT":
      return {
        qty: payload - 1
        
      };
        default:
      throw new Error();
    }
};

export const CountContextProvider = ({ children }) => {
  const [dataCount, setCount] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={[dataCount, setCount]}>
      {children}
    </CountContext.Provider>
  );
};