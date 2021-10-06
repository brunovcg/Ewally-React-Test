import Container from "./styles";
import logo from "../../assets/logo.png";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { useToken } from "../../providers/token";

const Header = () => {
  const { userToken, handleLogout } = useToken();

  return (
    <Container>
      <figure>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </figure>
      <div className="header-links">
        <h1>Ewally</h1>
      </div>
      <div className="header-apps">
        <a href="https://apps.apple.com/br/app/ewally-dinheiro-digital/id618685061">
          <img src={apple} alt="appleLogo" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=project.android.ewally">
          <img src={android} alt="androidLogo" />
        </a>
        {userToken && (
          <div>
            <Button
              setBackground="var(--white)"
              setColor="var(--red)"
              setClick={() => handleLogout()}
            >
              Sair
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
