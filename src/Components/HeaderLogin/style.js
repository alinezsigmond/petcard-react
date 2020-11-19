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
    img {
        margin-top: 17%;
    }
    .options {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 6%;
    }
    @media screen and (min-width: 820px) {
        img {
            margin-top: 3%;
        }
        .options {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 2.3%;
        }
    }
    @media screen and (max-height: 600px) {
        img {
            margin-top: 16%;
        }
        .options {
            margin-top: 5%;
        }
    }
`