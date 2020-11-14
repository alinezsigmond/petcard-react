import styled from 'styled-components'

export const LoginStyle = styled.form `
    background-color: rgba(146, 213, 239, 0.300);
    height: 100%;
    padding-top: 5%;
    
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
    p {
        font-family: 'Summit Attack';
        color: #2C748C;
        font-size: 15px;
        text-align: center;
        padding-bottom: 50px;
    }
    .login {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        padding-left: 10%;
    }
    @media screen and (min-width: 820px) {
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