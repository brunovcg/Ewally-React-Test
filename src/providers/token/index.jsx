import { createContext, useContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("@Ewally:Token:User") || "");

  const [user, setUser] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    setUserToken("");
  };



  useEffect(() => {
    setUserToken(JSON.parse(localStorage.getItem("@Ewally:Token:User")));
    setUser(JSON.parse(localStorage.getItem("@Ewally:Username")));
  }, []);

  return (
    <TokenContext.Provider
      value={{ userToken, setUserToken, handleLogout, user }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
