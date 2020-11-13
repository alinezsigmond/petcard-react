import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Icon from '../../Components/Icon/Icon'

//Estilo
import {IconsStyle} from './style'

//Imagens
import Paw from '../../assets/images/paw-big.svg'
import Cat from '../../assets/images/cat.svg'
import Add from '../../assets/images/add-pet.svg'
import Tequila from '../../assets/images/teq.png'

function MyPets() {
    
    return (
        <>
            <Header img={Paw} titulo='Meus Pets' />
            <IconsStyle>
                <span className='my-pets'>
                    <Icon size='m' img={Tequila} text='Tequila' />
                    <Icon size='m' img={Cat} text='Joseph' />
                    <Icon size='m' img={Add} text='Novo pet' />
                </span>
            </IconsStyle>
        </>
    )
}

export default MyPets;