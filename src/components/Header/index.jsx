import Container from "./styles";
import logo from "../../assets/logo.png";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="header-links">
      <Link to="/"><h1>Ewally</h1></Link>

      </div>
      <div className="header-apps">
        <a href="https://apps.apple.com/br/app/ewally-dinheiro-digital/id618685061">
          <img src={apple} alt="appleLogo" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=project.android.ewally">
          <img src={android} alt="androidLogo" />
        </a>
      </div>
    </Container>
  );
};

export default Header;
