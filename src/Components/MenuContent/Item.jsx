import React from 'react'
import {Link} from 'react-router-dom'

export default function Item(props) {
    const linkStyle = {
        textDecoration: 'none',
        fontFamily: 'Summit Attack',
        fontSize: '16px',
        color: '#3C6382',
        display: 'flex',
        flexWrap: 'nowrap',
    }
    const imgStyle = {
        marginLeft: '10%',
        marginRight: '10%',
    }
    const pStyle = {
        // marginTop: '7%',
    }
    return (
        <Link
        style={linkStyle}
        onClick={props.closeCallback}
        to={props.link}>
        <img style={imgStyle} src={props.img} alt="" /> <p className='menuText' style={pStyle}> {props.text} </p> 
        </Link>
    )
}