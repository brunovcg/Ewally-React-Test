/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./styles";
import { useToken } from "../../providers/token";
import { useBalance } from "../../providers/balance";
import {  useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button";
import convertDate from "../../utils/convertDate";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import stringToDate from "../../utils/stringToDate";
import convertToReal from "../../utils/convertToReal";
import Modal from "react-modal";
import customStyles from "../../utils/customStyles";
import OtherInfo from "../../components/OtherInfo";
import BarChart from "../../components/Chart";

const Account = () => {
  const {  user } = useToken();
  const { balance, getStatements, statements } = useBalance();
  const [valueInitial, setValueInitial] = useState(new Date());
  const [valueFinal, setValueFinal] = useState(new Date());
  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalInfo, setModalInfo] = useState({});

  registerLocale("ptBR", ptBR);
  setDefaultLocale("ptBR");

  const setModal = (latitude, longitude, receipt) => {
    setModalInfo({
      latitude: latitude,
      longitude: longitude,
      receipt: receipt,
    });

    setIsOpen(!modalIsOpen);
  };

  return (
    <Container>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={setIsOpen}
        ariaHideApp={false}
      >
        <OtherInfo
          latitude={modalInfo.latitude}
          longitude={modalInfo.longitude}
          receipt={modalInfo.receipt}
          setModal={setModal}
        />
      </Modal>

      <div className="account-welcome-bar">
        <p>
          Bem vindo <span className="account-username">{user}</span> seu saldo é{" "}
          <span className="account-balance">{balance}</span>
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
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="account-date-pickers-box">
              <p>Data Final</p>
              <DatePicker
                selected={valueFinal}
                onChange={(date) => setValueFinal(date)}
                onSelect={(date) => setValueFinal(date)}
                dateFormat="dd/MM/yyyy"
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

        {statements.length > 0 && <BarChart statements={statements}/>}

        

        <div className="account-extrato-infos">
          {statements.length > 0 && (
            <div className="info-title">
              <p className="info-title-line title-data">Data</p>
              <p className="info-title-line title-type">Tipo</p>
              <p className="info-title-line title-value">Valor</p>
            </div>
          )}

          {statements &&
            statements.map((transaction) => (
              <div className="info-statements" key={transaction.id}>
                <div className="data">
                  {convertDate(stringToDate(transaction.createdAt), true)}


                </div>
                <div className="type">{transaction.operationType}</div>
                <div
                  className={`value ${
                    transaction.amount > 0 ? "positive" : "negative"
                  }`}
                >
               
                {(convertToReal(transaction.amount))}


                  <Button
                    setWidth="30px"
                    setHeight="30px"
                    setBackground="var(--white)"
                    setColor="var(--purple)"
                    setClick={() =>
                      setModal(
                        transaction.otherInfo.userLatitude,
                        transaction.otherInfo.userLongitude,
                        transaction.otherInfo.cupom
                      )
                    }
                  >
                    C
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Account;
