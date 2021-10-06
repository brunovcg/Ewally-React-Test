import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { useToken } from "../../providers/token";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api.js"
import jwt_decode from "jwt-decode";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const { setUserToken } = useToken();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid e-mail").required("Required field"),
    password: yup.string().min(6).required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api.post("/user/login", data).then((response) => {
      const { accessToken } = response.data;

      localStorage.setItem("@DevJobs:Token:User", JSON.stringify(accessToken));
      setUserToken(accessToken);
      const decoded = jwt_decode(accessToken);
      const { sub } = decoded;
      localStorage.setItem("@DevJobs:User:Id", sub);

      // return history.push("/dashboard");
    });
    //   .catch((err) => {
    //     toast.error("Invalid e-mail or password");
    //   });
  };

  return (
    <Container>
      <div className="login-main-box">
        <h2>Login</h2>

        <form>
          <Input
            placeholder="E-mail"
            register={register}
            name="email"
            error={errors.email?.message}
            setHeight="70px"
            setWidth="100%"
          />


          <Input
          placeholder="Password"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
          setHeight="70px"
          setWidth="100%"
          />

          <Button
          setClick={handleSubmit(onSubmitFunction)}
          setSize="large"
          setColor="var(--ewally-green)"
          
          >
            Logar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
