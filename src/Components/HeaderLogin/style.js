import styled from 'styled-components'
import bg from '../../assets/images/pawPattern-dark.svg'

export const HeaderLoginStyle = styled.div `
    background-color: #3C6382;
    background-image: url(${bg});
    height: 242px;
    width: 100%;
    color: #FFF;
    font-family: 'Summit Attack';
    font-size: 21px;
    text-align: center;

    .slogan {
        font-size: 16px;
    }
    .cadastrar {
        margin-left: 20%;
        margin-top: 13%;
        display: flex;
        justify-content: flex-start;
    }
    .login {
        margin-right: 20%;
        margin-top: -13%;
        display: flex;
        justify-content: flex-end;
    }
    img {
        margin-top: 17%;
    }
    @media screen and (min-width: 820px) {
        .login {
            margin-right: 20%;
            margin-top: -4%;
        }
        .cadastrar {
            margin-left: 20%;
            margin-top: 5%;
        }
        img {
            margin-top: 3%;
        }
    }
`