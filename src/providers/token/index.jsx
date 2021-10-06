import { createContext, useContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("@Ewally:Token:User") || ""
  );



  const getUser = () => {
    return localStorage.getItem("@Ewally:Username");
  };



  const handleLogout = () => {
    localStorage.clear();
    setUserToken("");
  };

  return (
    <TokenContext.Provider
      value={{ userToken, setUserToken, handleLogout, getUser }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
