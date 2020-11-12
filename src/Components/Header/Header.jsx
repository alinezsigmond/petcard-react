import React from 'react'
// import GlobalFonts from '../../assets/fonts/fonts'

import Icon from '../Icon/Icon'
// import './header.css'
import {HeaderStyle} from './style'
import menu from '../../assets/images/menu.svg'

export default function Header(props) {
    return (
        <HeaderStyle>
            <img className='menuSandwich' src={menu} alt='' />
            <Icon size='b' img={ props.img } text={props.titulo} />
        </HeaderStyle>
    )
}