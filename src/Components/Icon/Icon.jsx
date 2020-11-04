import React from 'react'

// import '../../reset.css'
// import './icon.css'
import {IconStyle} from './style'

export default function Icon(props) {
    return (
        <IconStyle>
            <div className="icon" >
                <img src={ props.img } alt="" />
            </div>
            <p className="icon-title"> {props.text} </p>
        </IconStyle>
    )
}