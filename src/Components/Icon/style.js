import styled from 'styled-components';

export const IconStyle = styled.p `
    width: 99px;
    font-family: 'Summit Attack';
    font-size: 17px;
    color: #3C6382;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-block-end: 0;

    div.icon {
        width: 78px;
        height: 78px;
        border-radius: 8px;
        background-color: #60A3BC;
        display: flex;
        align-items: center;
        justify-content: center;
        &.m {
            width: 99px;
            height: 99px;
        }
        &.b {
            width: 132px;
            height: 132px;
            background-color: #92D4EF;
        }
    }
`