import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;

  figure {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      img {
        @media (max-width: 500px) {
          width: 10vw;
        }
      }
    }
  }

  .header-links {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1{
      color: var(--grey);
    }
  }

  .header-apps {
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      img {
        :hover {
          opacity: 50%;
        }
        @media (max-width: 500px) {
          width: 10vw;
        }
      }
    }

    button {
      border-radius: 50%;
      width: 39px;
      height: 39px;
      border: 1px solid var(--red);
    }
  }
`;

export default Container;
