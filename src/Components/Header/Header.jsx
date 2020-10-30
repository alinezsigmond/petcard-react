import React from 'react'

import Icon from '../Icon/Icon'
import './header.css'

export default function Header(props) {
    return (
        <div className='header'>
            <Icon img={ props.img } text='Aline Zsigmond' />
        </div>
    )
}