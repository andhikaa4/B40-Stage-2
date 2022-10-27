import { createContext, useReducer } from "react";

export const CardContext = createContext();

const initialState = {
  cart: null,
  resto: null,
  qty: 1,
  id: 0
};

const reducer = (_, action) => {
  const { type, payload, restoLoad } = action;

  switch (type) {
    case "ADD_ORDER":
      return {
        cart: payload,
        
      };
      case "VIEW_RESTO":
      return {
        resto: restoLoad
      };
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

export const CardContextProvider = ({ children }) => {
  const [dataCard, setCard] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={[dataCard, setCard]}>
      {children}
    </CardContext.Provider>
  );
};