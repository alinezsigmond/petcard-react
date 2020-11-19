import React from 'react'
import {ButtonStyle} from './style'

export default function Button(props) {
    return (
        <ButtonStyle>
            {props.text}
        </ButtonStyle>
    )
}