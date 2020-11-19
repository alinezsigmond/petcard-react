import React from 'react'
import Logo from '../../assets/images/logoText.svg'
import {Link} from 'react-router-dom'

import {HeaderLoginStyle} from './style'

export default function HeaderLogin() {

    return (
        <HeaderLoginStyle>
            <img src={Logo} alt='Logotipo PetCard' />
            <p className='slogan'>A carteira de vacinação online do seu pet</p>
            <div className='options'>
                <Link to='/cadastro'><p>Cadastrar</p></Link>
                <Link to ='/login'><p>Login</p></Link>
            </div>
        </HeaderLoginStyle>
    )
}