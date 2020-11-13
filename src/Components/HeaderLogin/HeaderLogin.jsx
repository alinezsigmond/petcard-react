import React from 'react'
import Logo from '../../assets/images/logoText.svg'

import {HeaderLoginStyle} from './style'

export default function HeaderLogin() {

    return (
        <div className='container'>
            <HeaderLoginStyle>
                <img src={Logo} alt='Logotipo PetCard' />
                <p className='slogan'>A carteira de vacinação online do seu pet</p>
                <p className='cadastrar'>Cadastrar</p>
                <p className='login'>Login</p>
            </HeaderLoginStyle>
        </div>
    )
}