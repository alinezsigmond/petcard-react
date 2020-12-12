import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HeaderPet from '../../Components/HeaderPet/HeaderPet'
import breeds from './dogBreeds.json'
import sexes from './sex.json'
import {Link} from 'react-router-dom'
import {Selection, BG, CadastroPet} from './dogStyle'

export default function NewDog() {
    return (
        <>
            <HeaderPet />
            <Selection />
            <BG>
                <CadastroPet>
                    <input type='text' name='Nome' placeholder='Nome' />
                    <input className='data' type='date' name='Data de nascimento' placeholder='Data de nascimento' />
                    <select id="dogSex" name="dogSex" required>
                        { sexes.map((sexes, index) =>
                            <option key={index} value={sexes.sex}>{sexes.sex}</option>
                        )}
                    </select>
                    <input type="number" name="pesoDog" placeholder="Peso kg" />
                    <select>
                        { breeds.map((breeds, index) =>
                            <option key={index} value={breeds.breed}>{breeds.breed}</option>
                        )}
                    </select>
                </CadastroPet>
            </BG>
            <Link to='/meuspets'><Footer /></Link>
        </>
    )
}