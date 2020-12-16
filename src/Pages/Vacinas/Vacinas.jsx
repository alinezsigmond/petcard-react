import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Tequila from '../../assets/images/teq132.png'
import MedCard from '../../Components/MedCard/MedCard'
import { ContentStyle } from './style'

export default function Vacinas() {

    return (
        <>
            <Header img={Tequila} size='b' titulo='Vacinas da Tequila' />
            <ContentStyle>
                <MedCard med='Leishmaniose' />
                <MedCard med='Cinomose' />
                <button>Adicionar nova vacina</button>
            </ContentStyle>
        </>
    )
}