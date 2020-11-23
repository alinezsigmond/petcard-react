import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HeaderPet from '../../Components/HeaderPet/HeaderPet'
import {Selection, BG, CadastroPet} from './style'
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
                    <select id="sexoDog" name="sexoDog" required>
                        <option>Selecione o sexo</option>
                        <option value="femCas">Fêmea castrada</option>
                        <option value="femFer">Fêmea fértil</option>
                        <option value="macCas">Macho castrado</option>
                        <option value="macFer">Macho fértil</option>
                    </select>
                    <input type="number" name="pesoDog" placeholder="Peso kg" />
                    <select id="dogbreeds" name="dogbreeds">
                        <option>Selecione a raça</option>
                        <option value="SRD">SRD (Sem raça definida)</option>
                        <option value="Abissinio">Abissínio</option>
                        <option value="Angora">Angorá</option>
                        <option value="Balines">Balinês</option>
                        <option value="Bengal">Bengal</option>
                        <option value="Bobtail americano">Bobtail americano</option>
                        <option value="Bobtail japones">Bobtail japonês</option>
                        <option value="Bombay">Bombay</option>
                        <option value="Burmes">Burmês</option>
                        <option value="Burmes vermelho">Burmês vermelho</option>
                        <option value="Chartreux">Chartreux</option>
                        <option value="Colorpoint Shorthair">Colorpoint Shorthair</option>
                        <option value="Cornish Rex.">Cornish Rex.</option>
                        <option value="Curl Americano">Curl Americano</option>
                        <option value="Devon Rex">Devon Rex</option>
                        <option value="Himalaio">Himalaio</option>
                        <option value="Jaguatirica">Jaguatirica</option>
                        <option value="Javanes">Javanês</option>
                        <option value="Korat">Korat</option>
                        <option value="LaPerm">LaPerm</option>
                        <option value="Maine Coon">Maine Coon</option>
                        <option value="Manx">Manx</option>
                        <option value="Cymric">Cymric</option>
                        <option value="Mau Egipcio">Mau Egípcio</option>
                        <option value="Mist Australiano">Mist Australiano</option>
                        <option value="Munchkin">Munchkin</option>
                        <option value="Noruegues da Floresta">Norueguês da Floresta</option>
                        <option value="Pelo curto americano">Pelo curto americano</option>
                        <option value="Pelo curto brasileiro">Pelo curto brasileiro</option>
                        <option value="Pelo curto europeu">Pelo curto europeu</option>
                        <option value="Pelo curto ingles">Pelo curto inglês</option>
                        <option value="Persa">Persa</option>
                        <option value="Pixie-bob">Pixie-bob</option>
                        <option value="Ragdoll">Ragdoll</option>
                        <option value="Ocicat">Ocicat</option>
                        <option value="Russo Azul">Russo Azul</option>
                        <option value="Sagrado da Birmania">Sagrado da Birmânia</option>
                        <option value="Savannah">Savannah</option>
                        <option value="Scottish Fold">Scottish Fold</option>
                        <option value="Selkirk Rex">Selkirk Rex</option>
                        <option value="Siames">Siamês</option>
                        <option value="Siberiano">Siberiano</option>
                        <option value="Singapura">Singapura</option>
                        <option value="Somali">Somali</option>
                        <option value="Sphynx">Sphynx</option>
                        <option value="Thai">Thai</option>
                        <option value="Tonquines">Tonquinês</option>
                        <option value="Toyger">Toyger</option>
                        <option value="Usuri">Usuri</option>
                    </select>
                </CadastroPet>
            </BG>
            <Link to='/meuspets'><Footer /></Link>
        </>
    )
}