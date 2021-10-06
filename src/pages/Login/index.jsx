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

const Login = () => {
  const { setUserToken } = useToken();

  const [user, setUser] = useState("");

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

  const onSubmitFunction = (data) => {
    api.post("user/login", data).then((response) => {
      const { token } = response.data;

      localStorage.setItem("@Ewally:Token:User", JSON.stringify(token));
      setUserToken(token);

      localStorage.setItem("@Ewally:Username", user);

      // return history.push("/dashboard");
    });
    //   .catch((err) => {
    //     toast.error("Invalid e-mail or password");
    //   });
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
              placeholder="Username"
              register={register}
              name="username"
              error={errors.username?.message}
              setHeight="70px"
              setWidth="100%"
              setFont="1rem"
              onChange={(e) => setUser(e.target.value)}
            />

            <Input
              placeholder="Password"
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
                setColor="var(--ewally-green)"
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
