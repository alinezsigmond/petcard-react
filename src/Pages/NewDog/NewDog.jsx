import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HeaderPet from '../../Components/HeaderPet/HeaderPet'
import {Link} from 'react-router-dom'
import {Selection, BG, CadastroPet} from './style'

export default function NewDog() {
    return (
        <>
            <HeaderPet />
            <Selection />
            <BG>
                <CadastroPet>
                    <input type='text' name='Nome' placeholder='Nome' />
                    <input className='data' type='date' name='Data de nascimento' placeholder='Data de nascimento' />
                    <select id="sexoDog" name="sexoDog" required>
                        <option>Selecione o sexo</option>
                        <option value="Fêmea castrada">Fêmea castrada</option>
                        <option value="Fêmea fértil">Fêmea fértil</option>
                        <option value="Macho castrado">Macho castrado</option>
                        <option value="Macho fértil">Macho fértil</option>
                    </select>
                    <input type="number" name="pesoDog" placeholder="Peso kg" />
                    <select id="dogbreeds" name="dogbreeds">
                        <option>Selecione a raça</option>
                        <option value="SRD">SRD (Sem raça definida)</option>
                        <option value="Lhasa-apso">Lhasa-apso</option>
                        <option value="Labrador">Labrador</option>
                        <option value="Pinscher">Pinscher</option>
                    </select>
                </CadastroPet>
            </BG>
            <Link to='/meuspets'><Footer /></Link>
        </>
    )
}