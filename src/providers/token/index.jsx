import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("@Ewally:Token:User") || ""
  );

  const [userId, setUserId] = useState(
    localStorage.getItem("@Ewally:User:Id") || ""
  );

  const getUserId = () => {
    return localStorage.getItem("@Ewally:User:Id");
  };

  useEffect(() => {
    if (userToken !== "") {
      const decoded = jwt_decode(userToken);
      const { sub } = decoded;
      localStorage.setItem("@Ewally:User:Id", sub);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserToken("");
    setUserId("");
  };

  return (
    <TokenContext.Provider
      value={{ userToken, setUserToken, userId, handleLogout, getUserId }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
