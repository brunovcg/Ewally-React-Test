import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-height: 90vh;
  background-color: var(--light-grey);

  .account-welcome-bar {
    margin: 20px 0;
    width: 90%;
    height: 6vh;
    border-radius: 8px;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }

    p {
      .account-username {
        color: var(--purple);
        font-weight: bold;
      }

      .account-balance {
        color: var(--green);
        font-weight: bold;
      }
    }
  }

  .account-extrato {
    background-color: var(--white);
    min-height: 75vh;
    height: fit-content;
    width: 90%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h2 {
      margin-top: 15px;
      width: 100%;
      text-align: center;
      color: var(--ewally-green);
      margin-bottom: 20px;
    }

    .account-date {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin: 0 auto;

      .account-date-pickers {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75%;

        @media (max-width: 500px) {
          flex-direction: column;
        }

        .account-date-pickers-box {
          margin: 5px;
          p {
            text-align: center;
            color: var(--grey);
          }
        }
      }

      .account-button {
        width: 20%;
        display: flex;
        justify-content: center;

        button {
          border-radius: 50%;
          width: 39px;
          height: 39px;
          border: 2px solid var(--orange);
        }
      }
    }

    .account-extrato-infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin-top: 30px;

      .info-title {
        width: 100%;
        display: flex;
        align-items: center;

        .info-title-line {
          width: 33%;
          text-align: center;
          font-weight: bold;
        }
      }

      .info-statements {
        width: 100%;
        display: flex;
        align-items: center;
        border-top: 1px solid var(--light-grey);

        .data,
        .type,
        .value {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33%;
          font-size: 0.6rem;
          text-align: center;
          height: 50px;
        }

        .data {
          @media (max-width: 500px) {
            width: 15%;
          }
        }

        .type {
          @media (max-width: 500px) {
            font-size: 0.45rem;
            width: 50%;
          }
        }

        .value {
          justify-content: flex-end;
          @media (max-width: 500px) {
           
            width: 35%;
          }

          button {
            margin-left: 20px;
            border-radius: 50%;
            border: 2px solid var(--purple);
          }
        }

        .positive {
          color: var(--green);
        }

        .negative {
          color: var(--red);
        }
      }
    }
  }
`;
