import styled from "styled-components";
import back from "../../assets/back.jpg";

export const Container = styled.div`
  background-image: url(${back});
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
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
      max-width: 500px;
      height: 70%;

      @media (max-width: 500px) {
        height: 60%;
      }

      .login-title-logo {
        display: flex;
        width: 60%;
        height: 25%;
        figure {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;

          img {
            height: 70%;
            @media (max-width: 500px) {
              height: 50%;
            }
          }
        }

        h2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: var(--grey);
          width: 100%;
          font-size: 1.5rem;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        height: 75%;
        padding-top: 20px;

        @media (max-width: 500px) {
          height: 65%;
        }

        input {
          border-bottom: 1px solid var(--ewally-green);
        }

        .login-button-box {
          margin: 5px 0 20px 0;
          width: 100%;
          display: flex;
          justify-content: center;

          button {
            border-radius: 50%;
            width: 70px;
            height: 70px;
            border: 2px solid var(--ewally-green);
          }
        }
      }
    }
  }
`;
