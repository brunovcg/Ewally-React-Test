import styled from "styled-components";
import back from "../../assets/back.jpg";

const Container = styled.main`
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

    .home-big-text,
    .home-small-text {
      color: var(--white);
      width: 60%;
      padding-left: 30px;
      @media (max-width: 500px) {
        width: 80%;
      }
    }

    .home-big-text {
      padding-top: 45px;
      font-size: 3vw;
      font-weight: bold;
      @media (max-width: 500px) {
        font-size: 5vw;
      }
    }

    .home-small-text {
      padding-top: 30px;
      font-size: 2vw;

      @media (max-width: 500px) {
        font-size: 3.5vw;
        font-weight: bold;
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

export default Container;
