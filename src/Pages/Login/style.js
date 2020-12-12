import styled from 'styled-components'

export const LoginStyle = styled.form `
    background-color: rgba(146, 213, 239, 0.300);
    width: 88%;
    height: 100%;
    padding-top: 5%;
    margin-top: -1%;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    padding-left: 12%;
    /* padding-bottom: 7%; */
    button {
        border: 0;
        background-color: #3C6382;
        color: white;
        width: 114%;
        height: 50px;
        margin-left: -43px;
        margin-top: 64%;
    }
    input {
        width: 80%;
        height: 45px;
        border-style: solid;
        border-color: #92D4EF;
        border-width: 1px;
        margin-top: 5%;
        color: #3C6382;
        padding-left: 5%;
    }
    @media screen and (min-width: 820px) {
        margin-top: -4px;
        padding-left: 35%;
        width: 65%;
        padding-bottom: 1%;
        input {
            width: 40%;
            margin-left: 1%;
            margin-top: 2%;
            padding-left: 2%;
        }
        .login {
            padding-left: 35%;
        }
        p {
            padding-top: 1%;
        }
    }
`

export const TextStyle = styled.p `
    /* background-color: rgba(146, 213, 239, 0.300); */
    font-family: 'Summit Attack';
    color: #2C748C;
    font-size: 15px;
    text-align: center;
    /* padding-bottom: 30%; */
    margin-bottom: 0;
    padding-top: 1%;
    margin-top: -67%;
    @media screen and (min-width: 820px) {
        padding-bottom: 5%;
    }
`

export const Selection = styled.div `
    background-color: #92D4EF;
    width: 50%;
    height: 4px;
    margin-left: 50%;
    @media screen and (min-width: 820px) {
        margin-left: 50%;
    }
`