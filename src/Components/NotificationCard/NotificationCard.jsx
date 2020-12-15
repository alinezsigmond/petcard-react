import React from 'react'
import { Card } from './style'

export default function NotificationCard(props) {

    return (
        <Card>
            <p className='med'> {props.remedio} </p>
            <p className='day'> {props.dia} </p>
            <p className='time'> {props.horario} </p>
        </Card>
    )
}