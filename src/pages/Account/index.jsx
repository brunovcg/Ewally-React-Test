/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./styles";
import { useToken } from "../../providers/token";
import { useBalance } from "../../providers/balance";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button";
import convertDate from "../../utils/convertDate";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import stringToDate from "../../utils/stringToDate"
import convertToReal from "../../utils/convertToReal"

const Account = () => {
  const { getUser, userToken } = useToken();
  const { getBalance, balance, getStatements, statements } = useBalance();
  const [valueInitial, setValueInitial] = useState(new Date());
  const [valueFinal, setValueFinal] = useState(new Date());

  const [user, setUser] = useState("");

  registerLocale("ptBR", ptBR);
  setDefaultLocale("ptBR");

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
                onSelect={(date) => setValueInitial(date)}
              />
            </div>
            <div className="account-date-pickers-box">
              <p>Data Final</p>
              <DatePicker
                selected={valueFinal}
                onChange={(date) => setValueFinal(date)}
                onSelect={(date) => setValueFinal(date)}
              />
            </div>
          </div>
          <div className="account-button">
            <Button
              setColor="var(--orange)"
              setBackground="var(--white)"
              setClick={() =>
                getStatements(
                  convertDate(valueInitial),
                  convertDate(valueFinal)
                )
              }
            >
              OK
            </Button>
          </div>
        </div>

        
        <table className="account-extrato-infos">
            <tr className="info-title">
              <th>Ref</th>
              <th>Data</th>
              <th>Tipo</th>
              <th>Valor</th>
            </tr>

        
            {statements &&
              statements.map((transaction) => (
                <tr key={transaction.id}>
                  <td >{transaction.id}</td>
                  <td >{convertDate(stringToDate(transaction.createdAt), true)}</td>
                  <td>{transaction.operationType}</td>
                  <td
                    className={transaction.amount > 0 ? "positive" : "negative"}
                  >
                    R$ {convertToReal(transaction.amount)}
                  </td>
                </tr>
              ))}
          
        </table>
      </div>
    </Container>
  );
};

export default Account;
