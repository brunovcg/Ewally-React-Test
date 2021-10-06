import { createContext, useContext, useState } from "react";
import { useToken } from "../token";
import convertToReal from "../../utils/convertToReal";
import api from "../../services/api";

export const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const { userToken } = useToken("");

  const [balance, setBalance] = useState("");

  const [statements, setStatements] = useState([]);

  const getBalance = () => {
    let configs = {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    };

    api.get(`account/balance`, configs).then((response) => {
      setBalance(convertToReal(response.data.balance));
    });
  };

  const getStatements = (dateInitial, dateFinal) => {
    let configs = {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    };

    api
      .get(
        `account/statements?initialDate=${dateInitial}&finalDate=${dateFinal}`,
        configs
      )
      .then((response) => {
        setStatements(response.data.statement);
      });
  };

  return (
    <BalanceContext.Provider
      value={{ getBalance, balance, getStatements, statements }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);