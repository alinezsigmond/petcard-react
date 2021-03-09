import styled from 'styled-components'
import bg from '../../assets/images/pawPattern-light.svg'

export const IndexStyle = styled.div `
    background-color: rgba(146, 213, 239, 0.300);
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    .slogan {
        color: #3C6382;
        font-family: Quanto;
        font-weight: lighter;
        font-size: 2.5rem;
        width: 75%;
        margin-left: 3%;
        margin-right: 3%;
        margin-bottom: 15%;
    }
    .cadastro {
        font-family: 'Summit Attack';
        font-size: 15px;
        color: #3C6382;
    }
    .logo {
        padding-top: 18%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 820px) {
        .slogan {
            font-size: 54px;
            margin-left: auto;
            margin-right: auto;
        }
        .logo {
            padding-top: 0;
            width: 30%;
            margin: auto;
        }
    }
`