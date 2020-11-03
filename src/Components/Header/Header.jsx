import React from 'react'

import Icon from '../Icon/Icon'
import './header.css'
import menu from '../../assets/images/menu.svg'

export default function Header(props) {
    return (
        <div className='header'>
            <img className='menuSandwich' src={menu} alt='' />
            <Icon img={ props.img } text={props.titulo} />
        </div>
    )
}