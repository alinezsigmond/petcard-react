import React from 'react'
import Calendar from 'react-calendar'

import {CalendarStyle} from './style'
import 'react-calendar/dist/Calendar.css'

import Header from '../../Components/HeaderLogged/HeaderLogged'
import CalIcon from '../../assets/images/calendar.svg'

export default function Calendario() {

    return (
        <>
            <Header size='b' img={CalIcon} alt='' titulo='Calendário' />
            <CalendarStyle>
                <Calendar locale />
            </CalendarStyle>
        </>
    )
}