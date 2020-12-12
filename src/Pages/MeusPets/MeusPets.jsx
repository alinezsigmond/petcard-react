import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Icon from '../../Components/Icon/Icon'
import {Link} from 'react-router-dom'

//Estilo
import {IconsStyle} from './style'

//Imagens
import Paw from '../../assets/images/paw-big.svg'
import Cat from '../../assets/images/cat.svg'
import Add from '../../assets/images/add-pet.svg'
import Tequila from '../../assets/images/teq99.png'

function MyPets() {
    
    return (
        <>
            <Header img={Paw} titulo='Meus Pets' />
            <IconsStyle>
                <span className='my-pets'>
                    <Link to='/perfilpet'><Icon size='m' img={Tequila} text='Tequila' /></Link>
                    <Icon size='m' img={Cat} text='Joseph' />
                    <Link to='/cadastro-cachorro'><Icon size='m' img={Add} text='Novo pet' /></Link>
                </span>
            </IconsStyle>
        </>
    )
}

export default MyPets;