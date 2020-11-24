import React from 'react'
import {Link} from 'react-router-dom'
import Arrow from '../../assets/images/arrow.svg'

import {HeaderStyle} from './style'

export default function HeaderPet() {

    return (
        <HeaderStyle>
            <Link to='/meuspets'><img src={Arrow} alt='Seta para a esquerda' /></Link>
            <h1>Qual pet deseja cadastrar?</h1>
            <p className='fill'>Preencha o formulário abaixo</p>
            <div className='options'>
                <Link to='/cadastro-cachorro'><p>Cachorro</p></Link>
                <Link to ='cadastro-gato'><p>Gato</p></Link>
            </div>
        </HeaderStyle>
    )
}