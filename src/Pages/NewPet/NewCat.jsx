import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HeaderPet from '../../Components/HeaderPet/HeaderPet'
import breeds from './catBreeds.json'
import sexes from './sex.json'
import {Selection, BG, CadastroPet} from './catStyle'
import {Link} from 'react-router-dom'

export default function NewCat() {
    return (
        <>
            <HeaderPet />
            <Selection />
            <BG>
                <CadastroPet>
                    <input type='text' name='Nome' placeholder='Nome' />
                    <input className='data' type='date' name='Data de nascimento' placeholder='Data de nascimento' />
                    <select id="catSex" name="catSex" required>
                        { sexes.map((sexes, index) =>
                            <option key={index} value={sexes.sex}> {sexes.sex}</option>
                        )}
                    </select>
                    <input type="number" name="pesoDog" placeholder="Peso kg" />
                    <select id="catBreeds" name="catBreeds">
                        { breeds.map((breeds, index) =>
                            <option key={index} value={breeds.breed}> {breeds.breed}</option>
                        )}
                    </select>
                </CadastroPet>
            </BG>
            <Link to='/meuspets'><Footer /></Link>
        </>
    )
}