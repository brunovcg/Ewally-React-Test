import Container from "./styles";

import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const goTo = (path) => {
    return history.push(path);
  };  

  return (

     
      <Container>
        <div className="home-transparent-box">
          <p className="home-big-text">
            Conheça nossas soluções e melhore o seu negócio com a plataforma
            para Banco Digital Ewally
          </p>

          <p className="home-small-text">
            A Ewally cria soluções financeiras de alta qualidade e customizadas
            às suas necessidades. Conte com nossa Plataforma BaaS para evoluir o
            seu negócio!
          </p>

          <div className="home-button-box">
            <Button
              setWidth="120px"
              setHeight="45px"
              setBackground="var(--ewally-green)"
              setColor="var(--white)"
              setClick={() => goTo("/login")}
              setFont="1.3rem"
            >
              Acesse
            </Button>
          </div>
        </div>
      </Container>

  );
};

export default Home;
