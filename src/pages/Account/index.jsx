/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./styles";
import { useToken } from "../../providers/token";
import { useBalance } from "../../providers/balance";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from "../../components/Button";

import convertDate from "../../utils/convertDate";

const Account = () => {
  const { getUser, userToken } = useToken();
  const { getBalance, balance } = useBalance();
  const [valueInitial, setValueInitial] = useState(new Date());
  const [valueFinal, setValueFinal] = useState(new Date());

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(getUser);
    getBalance();
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

        <div className="account-date">
          <div className="account-date-pickers">
            <div className="account-date-pickers-box">
              <p>Data Inicial</p>
              <DatePicker
                selected={valueInitial}
                onChange={(date) => setValueInitial(date)}
              />
            </div>
            <div className="account-date-pickers-box">
              <p>Data Final</p>
              <DatePicker
                selected={valueFinal}
                onChange={(date) => setValueFinal(date)}
              />
            </div>
          </div>
          <div className="account-button">
            <Button setColor="var(--orange)" setBackground="var(--white)">
              OK
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Account;
