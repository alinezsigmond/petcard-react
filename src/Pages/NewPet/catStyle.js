import styled from 'styled-components'

export const Selection = styled.div `
    background-color: #92D4EF;
    width: 50%;
    height: 4px;
    margin-left: 50%;
    @media screen and (min-width: 820px) { 
        margin-left: 50%;
    }
`
export const BG = styled.div `
    width: 100%;
    height: 100%;
    padding-top: 5%;
    margin-top: -1%;
    background-color: rgba(146, 213, 239, 0.300);
    @media screen and (min-width: 820px) {
        margin-top: -0.3%;
    }
`
export const CadastroPet = styled.form `
    width: 88%;
    height: 100%;
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
    .data {
        width: 81%;
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
        padding-left: 35%;
        width: 65%;
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
        .data {
            width: 40.3%;
            margin-left: 1%;
            margin-top: 2%;
            padding-left: 2%;
        }
    }
`