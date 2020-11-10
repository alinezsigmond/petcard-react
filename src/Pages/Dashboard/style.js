import styled from 'styled-components';

export const Icons = styled.body `
    background-color: rgba(146, 213, 239, 0.300);
    height: 100%;

    .dash1 {
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
        width: 87%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        word-wrap: inherit;
        justify-content: space-between;
    }
    .dash2 {
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
        width: 87%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        word-wrap: inherit;
        justify-content: space-between;
    }

    @media screen and (min-width: 820px) {
        .dash1 {
            width: 30%;
        }
        .dash2 {
            width: 30%;
        }
    }
`