import styled from "styled-components";
import back from "../../assets/back.jpg";

export const Container = styled.main`
  background-image: url(${back});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 90vh;

  .home-transparent-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: var(--transparent-black);

    .home-big-text {
      color: var(--yellow);
      width: 100%;
      text-align: center;
      padding-top: 45px;
      font-size: 10vw;
      font-weight: bold;
      @media (max-width: 500px) {
        font-size: 10vw;
      }
    }

    .home-button-box {
      padding-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        border-radius: 50%;
        width: 85px;
        height: 85px;
        border: 2px solid var(--white);
      }
    }
  }
`;
