import styled from 'styled-components';

export const IconsStyle = styled.div `
    background-color: rgba(146, 213, 239, 0.300);
    height: 330px;
    width: 100%;
    padding-top: 3%;
    div {
        height: 99px;
        width: 99px;
    }
    .my-pets {
        margin: auto;
        width: 80%;
        height: 300px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
    }
    img {
        border-radius: 8px;
    }
`