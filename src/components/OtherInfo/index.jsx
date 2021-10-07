import { Container } from "./styles";
import Button from "../../components/Button";

const OtherInfo = ({ latitude, longitude, receipt, setModal }) => {
  return (
    <Container>       
      <div className="location">
        <h2>Localização</h2>
        <p>Latitude : {latitude}</p>
        <p>Longitude : {longitude}</p>
      </div>

      <div className="receipt">
        <h2>Comprovante</h2>
        {!receipt ? (
          <p>Comprovante não disponível</p>
        ) : (
          <div className="receipt-image">
            {receipt
              .replaceAll(" ", "_")
              .split("@")
              .map((item) =>
                item === "" ? (
                  <div>
                    <br />
                  </div>
                ) : (
                  <div>
                    {item
                      .split("")
                      .map((letter, index) =>
                        letter === "_" ? (
                          <span className="space" key={index}>{letter}</span>
                        ) : (
                          <span className="regular" key={index}>{letter}</span>
                        )
                      )}
                  </div>
                )
              )}
          </div>
        )}
      </div>

      <Button
        setBackground="var(--white)"
        setColor= "var(--ewally-green)"
        setClick={() => setModal()}
        setWidth="50px"
        setHeight="50px"
      >
        OK
      </Button>
    </Container>
  );
};

export default OtherInfo;
