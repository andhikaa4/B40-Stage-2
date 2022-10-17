import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  isLoginAdmin: false,
};

const reducer = (_, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_USER":
      return {
        isLogin: true,
      };
      case "LOGIN_ADMIN":
        return {
          isLoginAdmin: true,
        };
    case "LOGOUT_USER":
      return {
        isLogin: false,
      };
      case "LOGOUT_ADMIN":
      return {
        isLoginAdmin: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [dataUser, setLogin] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[dataUser, setLogin]}>
      {children}
    </UserContext.Provider>
  );
};