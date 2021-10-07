import { Container } from "./styles.js";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  const goTo = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <div className="home-transparent-box">
        <p className="home-big-text">Page Not Found...</p>

        <div className="home-button-box">
          <Button
            setWidth="120px"
            setHeight="45px"
            setBackground="var(--purple)"
            setColor="var(--white)"
            setClick={() => goTo("/")}
            setFont="1.3rem"
          >
            Home
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PageNotFound;
