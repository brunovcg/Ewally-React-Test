import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .location {
    height: 30%;
    background-color: var(--light-grey);
    padding: 5px;

    h2 {
      text-align: center;
      font-size: 0.7rem;
    }
    p {
      font-size: 0.6rem;
    }
  }

  .receipt {
    height: 70%;
    background-color: var(--yellow);
    padding: 5px;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width: 500px) {
      width: 90%;
    }

    h2 {
      text-align: center;
      font-size: 0.6rem;
    }

    .receipt-image {
      font-size: 0.45rem;

      @media (max-width: 500px) {
        font-size: 0.5rem;
      }

      .space {
        color: var(--yellow);
      }
    }
  }

  button {
    margin-top: 10px;
    border-radius: 50%;
    border: 3px solid var(--ewally-green);
  }
`;
