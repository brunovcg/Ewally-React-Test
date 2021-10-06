import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.setWidth};
  height: ${(props) => props.setHeight};

  input {
    background: ${(props) => props.setBackground};
    padding-left: 5px;
    color: ${(props) => props.setColor};
    font-size: ${(props) => props.setFont};
    width: 100%;
    height: fit-content;
    border: none;
    font-weight: bold;
    &::placeholder {
      color: var(--grey);
    }
  }
  div {
    color: var(--red);
    font-size: 0.8rem;
    width: 100%;
    height: 40%;
    padding-left: 5px;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;
