import React from 'react'

export default function Item(props) {
    const linkStyle = {
        textDecoration: 'none',
        fontFamily: 'Summit Attack',
        fontSize: '16px',
        color: '#3C6382',
        display: 'flex',
        flexWrap: 'wrap',
    }
    const imgStyle = {
        marginLeft: '10%',
        marginRight: '10%',
    }
    const pStyle = {
        marginTop: '7%',
    }
    return (
        <a
        style={linkStyle}
        onClick={props.closeCallback}
        href={props.link}
        target="_blank" rel="noopener noreferrer">
        <img style={imgStyle} src={props.img} alt="" /> <p className='menuText' style={pStyle}> {props.text} </p> 
        </a>
    )
}