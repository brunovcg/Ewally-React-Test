import { Container } from "./styles";

const Input = ({
  error,
  register,
  name,
  setHeight,
  setWidth,
  setBackground,
  setColor,
  setFont,
  ...rest
}) => {
  return (
    <Container
      setHeight={setHeight}
      setWidth={setWidth}
      setBackground={setBackground}
      setColor={setColor}
      setFont={setFont}
    >
      <input {...register(name)} {...rest} />
      <div>{error}</div>
    </Container>
  );
};

export default Input;
