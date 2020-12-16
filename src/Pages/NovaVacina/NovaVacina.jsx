import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Tequila from '../../assets/images/teq132.png'
import { Style } from './style'

export default function NovaVacina() {
    return(
        <>
            <Header img={Tequila} size='b' titulo='Nova vacina para Tequila' />
            <Style>
                oi =)
            </Style>
        </>
    )
}