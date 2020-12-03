import styled from 'styled-components';
import bg from '../../assets/images/pawPattern-dark-big.svg';

export const HeaderStyle = styled.header `
    background-color: #3C6382;
    background-image: url(${bg});
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding-top: 10%;
        @media screen and (min-width: 820px) {
        padding-top: 0;
    }

    p {
        margin-top: 5%;
        width: 300px;
        color: white;
        font-family: 'Quanto';
        font-size: 38px;
        padding-top: 5%;
    }
    .back {
        transform: rotateY(180deg);
    }
    /* div {
        width: 132px;
        height: 132px;
        border-radius: 8px;
        background-color: #92D4EF;
    } */

    /* .menuSandwich {
        padding-right: 80%;
        padding-top: 3%;
    } */
`

export const MenuPosition = styled.div `
    width: 85%;
    display: flex;
    align-self: center;
    align-content: flex-start;
`