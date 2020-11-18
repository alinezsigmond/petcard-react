import React from 'react'
import Logo from '../../assets/images/logoText.svg'

import {HeaderLoginStyle} from './style'

export default function HeaderLogin() {

    return (
        <HeaderLoginStyle>
            <img src={Logo} alt='Logotipo PetCard' />
            <p className='slogan'>A carteira de vacinação online do seu pet</p>
            <div className='options'>
                <p>Cadastrar</p>
                <p>Login</p>
            </div>
        </HeaderLoginStyle>
    )
}