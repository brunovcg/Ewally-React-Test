/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./styles";
import { useToken } from "../../providers/token";
import { useEffect, useState } from "react";
import api from "../../services/api";
const Account = () => {
  const { getUser, userToken } = useToken();

  const [user, setUser] = useState("");
  const [balance, setBalance] = useState();

  const getBalance = () => {

    const configs = {

        headers : { 
            Authorization : "Bearer " + userToken
        }
    }

    api
    .get(`account/balance`, configs)
    .then((response) => {
    
    setBalance(response.data.balance)
    console.log(response.data.balance)

    }
    
    
    )

    
  };

  useEffect(() => {
    setUser(getUser);
    getBalance()
  }, [userToken]);

  return (
    <Container>
      <div className="account-welcome-bar">
        <p>
          Bem vindo <span className="account-username">{user}</span> seu saldo é{" "}
          <span className="account-balance">R$ {balance}</span>
        </p>
      </div>
    </Container>
  );
};

export default Account;
