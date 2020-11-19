import React from 'react'
import Arrow from '../../assets/images/arrow.svg'
import {FooterStyle} from './style'

export default function Footer() {
    return (
        <FooterStyle>
            <img src={Arrow} alt='Seta para a direita' />
        </FooterStyle>
    )
}