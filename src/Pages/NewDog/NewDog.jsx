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
                        <option value='Akita'>Akita</option>
                        <option value='Basset hound'>Basset hound</option>
                        <option value='Beagle'>Beagle</option>
                        <option value='Bichon frisé'>Bichon frisé</option>
                        <option value='Boiadeir australiano'>Boiadeir australiano</option>
                        <option value='Border collie'>Border collie</option>
                        <option value='Boston terrier'>Boston terrier</option>
                        <option value='Boxer'>Boxer</option>
                        <option value='Buldogue francês'>Buldogue francês</option>
                        <option value='Buldogue inglês'>Buldogue inglês</option>
                        <option value='Bull terrier'>Bull terrier</option>
                        <option value='Cane corso'>Cane corso</option>
                        <option value='Cavalier king charles spaniel'>Cavalier king charles spaniel</option>
                        <option value='Chihuahua'>Chihuahua</option>
                        <option value='Chow chow'>Chow chow</option>
                        <option value='Cocker spaniel inglês'>Cocker spaniel inglês</option>
                        <option value='Dachshund'>Dachshund</option>
                        <option value='Dálmata'>Dálmata</option>
                        <option value='Doberman'>Doberman</option>
                        <option value='Dogo argentino'>Dogo argentino</option>
                        <option value='Dogue alemão'>Dogue alemão</option>
                        <option value='Fila brasileiro'>Fila brasileiro</option>
                        <option value='Golden retriever'>Golden retriever</option>
                        <option value='Husky siberiano'>Husky siberiano</option>
                        <option value='Jack russell terrier'>Jack russell terrier</option>
                        <option value='Labrador retriever'>Labrador retriever</option>
                        <option value='Lhasa apso'>Lhasa apso</option>
                        <option value='Lulu da pomerânia'>Lulu da pomerânia</option>
                        <option value='Maltês'>Maltês</option>
                        <option value='Mastiff inglês'>Mastiff inglês</option>
                        <option value='Mastim tibetano'>Mastim tibetano</option>
                        <option value='Pastor alemão'>Pastor alemão</option>
                        <option value='Pastor australiano'>Pastor australiano</option>
                        <option value='Pastor de Shetland'>Pastor de Shetland</option>
                        <option value='Pequinês'>Pequinês</option>
                        <option value='Pinscher'>Pinscher</option>
                        <option value='Pit bull'>Pit bull</option>
                        <option value='Poodle'>Poodle</option>
                        <option value='Pug'>Pug</option>
                        <option value='Rottweiler'>Rottweiler</option>
                        <option value='Schnauzer'>Schnauzer</option>
                        <option value='Shar-pei'>Shar-pei</option>
                        <option value='Shiba inu'>Shiba inu</option>
                        <option value='Shih tzu'>Shih tzu</option>
                        <option value='Staffordshire bull terrier'>Staffordshire bull terrier</option>
                        <option value='Weimaraner'>Weimaraner</option>
                        <option value='Yorkshire'>Yorkshire</option>
                    </select>
                </CadastroPet>
            </BG>
            <Link to='/meuspets'><Footer /></Link>
        </>
    )
}