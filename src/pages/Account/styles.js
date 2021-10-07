import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  min-height: 90vh;
  background-color: var(--light-grey);

  .account-welcome-bar {
    margin: 20px 0;
    width: 95%;
    height: 10vh;
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
    width: 95%;
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
      border-top: 1px dotted var(--light-grey);
      border-bottom: 1px dotted var(--light-grey);
    }

    .account-date {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
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
        @media (max-width: 500px) {
          width: 35%;
        }

        button {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          border: 4px solid var(--orange);
          font-size: 1.6rem;
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
        color: var(--ewally-green);

        .info-title-line {
          width: 33%;
          text-align: center;
          font-weight: bold;
        }

        .title-data {
          @media (max-width: 500px) {
            width: 20%;
          }
        }

        .title-type {
          @media (max-width: 500px) {
            width: 40%;
          }
        }

        .title-value {
          @media (max-width: 500px) {
            width: 40%;
          }
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
            font-size: 0.5rem;
            width: 40%;
          }
        }

        .value {
          justify-content: flex-end;
          @media (max-width: 500px) {
            width: 45%;
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
