import styled from 'styled-components'

export const Style = styled.div `
    background-color: rgba(146, 212, 239, 0.3);
    width: 100%;
    height: 325px;
    display: flex;
    flex-direction: column;
    padding-top: 7%;
`
export const Form = styled.form `
    width: 88%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    padding-left: 12%;
    padding-bottom: 7%;
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
    button {
        width: 70%;
        height: 44px;
        background-color: #3C6382;
        border-radius: 4px;
        border: none;
        color: #FFF;
        font-family: 'Summit Attack';
        font-size: 16px;
        margin: auto;
        margin-right: 21%;
    }
`