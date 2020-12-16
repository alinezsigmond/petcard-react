import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Icon from '../../Components/Icon/Icon'
import {Content} from './style'
import { Link } from 'react-router-dom'

import Vacinas from '../../assets/images/vacinas.svg'
import Meds from '../../assets/images/meds.svg'
import Tequila from '../../assets/images/teq132.png'

export default function PerfilPet() {
    return (
        <>
            <Header img={Tequila} size='b' titulo='Tequila' />
            <Content>
                <div className='icons'>
                    <Link to='/vacinas'><Icon img={Vacinas} size='med' text='Vacinas' /></Link>
                    <Icon img={Meds} size='med' text='Remédios' />
                </div>
            </Content>
        </>
    )
}