import styled from 'styled-components'
import bg from '../../assets/images/pawPattern-light.svg'

export const IndexStyle = styled.div `
    background-color: rgba(146, 213, 239, 0.300);
    background-image: url(${bg});
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    .slogan {
        color: #3C6382;
        font-family: Quanto;
        font-size: 38px;
        margin-left: 3%;
        margin-right: 3%;
    }
    .cadastro {
        font-family: 'Summit Attack';
        font-size: 15px;
        color: #3C6382;
    }
    .logo {
        width: 70%;
        margin: auto;
    }
    @media screen and (min-width: 820px) {
        .slogan {
            font-size: 54px;
            margin-left: 15%;
            margin-right: 15%;
        }
        .logo {
            width: 30%;
            margin: auto;
        }
    }
`