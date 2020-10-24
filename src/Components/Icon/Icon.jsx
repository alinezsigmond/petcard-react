import React from 'react'
import Logo from '../../assets/images/paw-small.svg'

import './icon.css'

export default function Icon(props) {
    return (
        <div>
            <div className="icon">
                <img src={ Logo } alt="" />
            </div>
            <p className="icon-title">Meus pets</p>
        </div>
    )
}