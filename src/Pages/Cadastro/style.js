import styled from 'styled-components'

export const CadastroStyle1 = styled.form `
    /* background-color: white; */
    width: 88%;
    height: 100%;
    padding-top: 5%;
    margin-top: -1%;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    padding-left: 12%;
    padding-bottom: 7%;
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
        padding-top: 2%;
        padding-left: 35%;
        width: 65%;
        padding-bottom: 1%;
        input {
            width: 40%;
            margin-left: 1%;
            margin-top: 2%;
            padding-left: 2%;
        }
    }
`
export const CadastroStyle2 = styled.form `
    background-color: rgba(146, 213, 239, 0.300);
    width: 100%;
    height: 100%;
    padding-top: 5%;
    margin-top: -1%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    .formulario {
        padding-left: 13%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    p {
        margin-block-end: 0;
        margin-block-start: 0.5rem;
        font-family: 'Summit Attack';
        font-size: 21px;
        color: #3C6382;
        text-align: center;
        display: flex;
        justify-content: center;
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
    select {
        width: 86%;
        height: 45px;
        border-style: solid;
        border-color: #92D4EF;
        border-width: 1px;
        margin-top: 5%;
        color: #3C6382;
        padding-left: 5%;
    }
    @media screen and (min-width: 820px) {
        padding-top: 2%;
        margin-top: -4px;
        /* padding-left: 35%; */
        width: 100%;
        padding-bottom: 1%;
        .formulario {
            padding-left: 35%;
            display: flex;
            flex-direction: column;
            justify-content: center;
    }
        input {
            width: 40%;
            margin-left: 1%;
            margin-top: 2%;
            padding-left: 2%;
        }
        select {
            width: 42.4%;
            margin-left: 1%;
            margin-top: 2%;
            padding-left: 2%;
        }
        p {
            margin-block-end: 0;
            margin-block-start: 0.5rem;
            text-align: center;
            justify-content: center;
            margin: auto;
        }
    }
`
export const Selection = styled.div `
    background-color: #92D4EF;
    width: 50%;
    height: 4px;
    margin-right: 50%;
    z-index: 1;
    @media screen and (min-width: 820px) {
        
        margin-right: 50%;
    }
`