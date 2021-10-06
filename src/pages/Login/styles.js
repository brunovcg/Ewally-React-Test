import styled from "styled-components";
import back from "../../assets/back.jpg";

export const Container = styled.div`
  background-image: url(${back});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;

  .login-transparent-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--transparent-black);

    .login-main-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--white);
      width: 70%;
      height: 50%;

      @media (max-width: 500px) {
        height: 60%;
      }

      figure {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25%;
        width: 100%;

        @media (max-width: 500px) {
          height: 20%;
        }

        img {
          width: 8vw;
          @media (max-width: 500px) {
            width: 15vw;
          }
        }
      }

      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        color: var(--grey);
        width: 100%;
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        height: 65%;

        @media (max-width: 500px) {
          height: 65%;
        }

        input {
          border-bottom: 1px solid var(--ewally-green);
        }

        .login-button-box {
          margin-top: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
