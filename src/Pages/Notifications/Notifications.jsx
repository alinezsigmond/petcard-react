import React from 'react'
import HeaderSmall from '../../Components/HeaderSmall/HeaderSmall'
import NotificationCard from '../../Components/NotificationCard/NotificationCard'
import { Style } from './style'

export default function Notifications() {
    
    return (
        <>
            <HeaderSmall titulo='Notificações' />
            <Style>
                <NotificationCard titulo='Vacina da raiva' dia='10 de dezembro' hora='14h' />
                <NotificationCard titulo='Vermífugo' dia='15 de março' hora='11h' />
                <NotificationCard titulo='Colírio' dia='Todos os dias' hora='20h30' />
            </Style>
        </>
    )
}