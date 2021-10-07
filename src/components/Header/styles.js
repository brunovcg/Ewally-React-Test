import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;

  figure {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      width: 15%;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70%;

        :hover {
          opacity: 50%;
        }
        @media (max-width: 500px) {
          width: 10vw;
        }
      }
    }
  }

  .header-links {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      color: var(--grey);
    }
  }

  .header-apps {
    width: 25%;
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 500px) {
      justify-content: center;
    }

    a {
      @media (max-width: 500px) {
        display: flex;
        align-items: center;
      }

      img {
        :hover {
          opacity: 50%;
        }
        @media (max-width: 500px) {
          width: 12vw;
        }
      }
    }

    button {
      border-radius: 50%;
      width: 39px;
      height: 39px;
      border: 2px solid var(--red);
    }
  }
`;

export default Container;
