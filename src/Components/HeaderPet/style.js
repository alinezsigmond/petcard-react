import styled from 'styled-components'
import bg from '../../assets/images/pawPattern-dark.svg'

export const HeaderStyle = styled.div `
    background-color: #3C6382;
    background-image: url(${bg});
    height: 242px;
    width: 100%;
    color: #FFF;
    img {
        margin-top: 15%;
        margin-left: 5%;
        transform: rotate(180deg)
    }
    h1 {
        margin-top: 1%;
        font-family: 'Quanto';
        font-weight: lighter;
        font-size: 36px;
        text-align: center;
    }
    .fill {
        font-family: 'Summit Attack';
        font-weight: lighter;
        font-size: 16px;
        text-align: center;
    }
    a{
        color: white;
    }
    .options {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 6%;
        font-family: 'Summit Attack';
        font-weight: lighter;
        font-size: 21px;
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