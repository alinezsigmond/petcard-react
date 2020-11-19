import React from 'react'

import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import Footer from '../../Components/Footer/Footer'
import {CadastroStyle1, CadastroStyle2, Selection} from './style'

export default function Cadastro() {
    return (
        <>
            <HeaderLogin />
            <Selection />
            <CadastroStyle1>
                <input type="text" name="Nome completo" placeholder='Nome completo' />
                <input type="text" name="E-mail" placeholder='E-mail' />
                <input type="text" name="E-mail confirmation" placeholder='Confirme o e-mail' />
                <input type="password" name="Password" placeholder='Senha' />
                <input type="password" name="Password confirmation" placeholder='Confirme a senha' />
                <br />
            </CadastroStyle1>
            <CadastroStyle2>
                <p>Informações pessoais</p>
                <div className='formulario'>
                    <input type='date' name='Birth date' placeholder='Data de nascimento' />
                    <select id="pais">
                        <option>Selecione o país</option>
                        <option>Brasil</option>
                        <option>Argentina</option>
                        <option>Paraguai</option>
                    </select>
                    <select name="estado">
                        <option>Selecione o estado</option>
                        <option>Paraná</option>
                    </select>
                    <input type="text" placeholder="Cidade" required />
                </div>
                <br />
            </CadastroStyle2>
            <Footer />
        </>
    )
}