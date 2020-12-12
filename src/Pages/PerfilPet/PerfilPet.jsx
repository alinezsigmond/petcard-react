import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Icon from '../../Components/Icon/Icon'
import {Content} from './style'

import Vacinas from '../../assets/images/vacinas.svg'
import Meds from '../../assets/images/meds.svg'
import Tequila from '../../assets/images/teq132.png'

export default function PerfilPet() {
    return (
        <>
            <Header img={Tequila} size='b' titulo='Tequila' />
            <Content>
                <div className='icons'>
                    <Icon img={Vacinas} size='med' text='Vacinas' />
                    <Icon img={Meds} size='med' text='Remédios' />
                </div>
            </Content>
        </>
    )
}