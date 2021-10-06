import { createContext, useContext, useState} from "react";
import { useToken } from "../token";
import convertToReal from "../../utils/convertToReal"
import api from "../../services/api"

export const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {



    const {userToken } = useToken();

    const [balance, setBalance] = useState();


    const   getBalance = () => {
        let configs = {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        };

    
        api.get(`account/balance`, configs).then((response) => {
          setBalance(convertToReal(response.data.balance));
        });
      };


    return (
        <BalanceContext.Provider
          value={{ getBalance, balance }}
        >
          {children}
        </BalanceContext.Provider>
      );

}

export const useBalance = () => useContext(BalanceContext);