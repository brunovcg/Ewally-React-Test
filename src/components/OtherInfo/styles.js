import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.location{
    height: 30%;
    background-color: var(--light-grey);
    padding: 10px;

    h2{
        text-align: center;
        font-size: 1rem;
    }
    p{
        font-size: 0.8rem;
    }

}

.receipt{
    height: 70%;
    background-color: var(--yellow);
    padding: 10px;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h2{
        text-align: center;
        font-size: 1rem;

    }

    .receipt-image{
        font-size: 0.7rem;

        .space{
            color: var(--yellow);
        }
    }
}

button{
    margin-top: 20px;
    border-radius: 50%;
    border: 3px solid var(--ewally-green);
}



`
