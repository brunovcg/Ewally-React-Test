import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
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
            color: var(--grey)
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
  }
`;
