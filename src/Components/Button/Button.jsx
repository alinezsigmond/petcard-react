import React from 'react'
import {ButtonStyle} from './style'

export default function Button(props) {
    return (
        <ButtonStyle>    
        <div className='button'>
            <p className='text'> {props.text} </p>    
        </div>
        </ButtonStyle>
    )
}