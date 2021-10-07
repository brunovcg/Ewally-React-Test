import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { useToken } from "../../providers/token";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api.js";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import { useBalance } from "../../providers/balance";
import { toast } from "react-toastify";

const Login = () => {
  const { setUserToken } = useToken();

  const [user, setUser] = useState("");

  const { getBalance } = useBalance();

  const schema = yup.object().shape({
    username: yup.string().required("Campo necessário"),
    password: yup.string().required("Campo necessário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    api
      .post("user/login", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@Ewally:Token:User", JSON.stringify(token));
        setUserToken(token);

        localStorage.setItem("@Ewally:Username", JSON.stringify(user));

        getBalance(token);
        toast.success("Bem vindo!");
      })
      .catch((err) => {
        toast.error("Verifique usuário ou senha");
      });
  };

  return (
    <Container>
      <div className="login-transparent-box">
        <div className="login-main-box">
          <div className="login-title-logo">
            <figure>
              <img src={logo} alt="logo" />
            </figure>

            <h2>LOGIN</h2>
          </div>

          <form>
            <Input
              placeholder="Usuário"
              register={register}
              name="username"
              error={errors.username?.message}
              setHeight="70px"
              setWidth="100%"
              setFont="1rem"
              onChange={(e) => setUser(e.target.value)}
            />

            <Input
              placeholder="Senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
              setHeight="70px"
              setWidth="100%"
              setFont="1rem"
            />

            <div className="login-button-box">
              <Button
                setClick={handleSubmit(onSubmitFunction)}
                setWidth="120px"
                setHeight="45px"
                setBackground="var(--white)"
                setColor="var(--orange)"
                setFont="1.2rem"
                type="submit"
              >
                Logar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
