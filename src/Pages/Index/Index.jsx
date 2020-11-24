import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../Components/Button/Button'

import Logo from '../../assets/images/logo-card.svg'
import { IndexStyle } from './style';

export default function Index() {
    
    return (
        <IndexStyle>
                <img className='logo' src={Logo} alt="Logo PetCard" />
                <p className='slogan'>A carteira de vacinação online do seu pet</p>
                <Link to ='/login'>
                    <Button text='Login' />
                </Link>
                <Link to='/cadastro'><p className='cadastro'>Não tem conta? Cadastre-se</p></Link>
        </IndexStyle>
    )
}