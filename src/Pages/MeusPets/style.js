import styled from 'styled-components';

export const IconsStyle = styled.body `
    background-color: rgba(146, 213, 239, 0.300);
    height: 100%;
    width: 100%;

    div {
        height: 99px;
        width: 99px;
    }
    .my-pets {
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        word-wrap: inherit;
        justify-content: space-around;
        align-content: center;
    }
    img {
        border-radius: 8px;
    }
`