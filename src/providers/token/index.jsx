import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("@Ewally:Token:User") || ""
  );



  const getUserId = () => {
    return localStorage.getItem("@Ewally:Username");
  };



  const handleLogout = () => {
    localStorage.clear();
    setUserToken("");
  };

  return (
    <TokenContext.Provider
      value={{ userToken, setUserToken, handleLogout, getUserId }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
