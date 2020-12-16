import styled from 'styled-components';

export const Icons = styled.body `
    background-color: rgba(146, 213, 239, 0.300);
    height: 100%;

    .dash {
        margin-top: 9%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 2%;
        width: 90%;
        height: 303px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;
    }

    @media screen and (min-width: 820px) {
        .dash {
            width: 26%;
    }
`