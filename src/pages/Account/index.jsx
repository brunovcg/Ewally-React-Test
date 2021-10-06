/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./styles";
import { useToken } from "../../providers/token";
import {useBalance} from "../../providers/balance"
import { useEffect, useState } from "react";


const Account = () => {
  const { getUser, userToken } = useToken();
  const {getBalance, balance} = useBalance()

  const [user, setUser] = useState("");
  


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
      <div className="account-extrato">
            <h2>Extato</h2>
      </div>
    </Container>
  );
};

export default Account;
