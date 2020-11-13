import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../Components/Button/Button'

import Logo from '../../assets/images/logo-card.svg'
import { IndexStyle } from './style';

function Index() {
    
    return (
        <IndexStyle>
            <div className='container'>
                <img className='logo' src={Logo} alt="Logo PetCard" />
                <p className='slogan'>A carteira de vacinação online do seu pet</p>
                <Link to ='/dashboard'>
                    <Button text='Login' />
                </Link>
                <p className='cadastro'>Não tem conta? Cadastre-se</p>
            </div>
        </IndexStyle>
    )
}

export default Index;