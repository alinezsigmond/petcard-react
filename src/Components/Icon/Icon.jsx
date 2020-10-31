import React from 'react'

// import '../../reset.css'
import './icon.css'

export default function Icon(props) {
    return (
        <>
            <div className="icon" >
                <img src={ props.img } alt="" />
            </div>
            <p className="icon-title"> {props.text} </p>
        </>
    )
}