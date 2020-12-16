import React from 'react'
import Header from '../../Components/HeaderLogged/HeaderLogged'
import Tequila from '../../assets/images/teq132.png'
import { Form, Style } from './style'

import vacinas from './vacinas.json'
import notificacoes from './notificacoes.json'

export default function NovaVacina() {
    return(
        <>
            <Header img={Tequila} size='b' titulo='Nova vacina para Tequila' />
            <Style>
                <Form>
                    <select id="vacina" name="vacina" required>
                        { vacinas.map((vacinas, index) =>
                            <option key={index} value={vacinas.vacina}>{vacinas.vacina}</option>
                        )}
                    </select>
                    <input type='text' name='Ultima dose' placeholder='Data da última dose' />
                    <select id="notificacao" name="notificacao" required>
                        { notificacoes.map((notificacoes, index) =>
                            <option key={index} value={notificacoes.notificacao}>{notificacoes.notificacao}</option>
                        )}
                    </select>
                    <button>Adicionar</button>
                </Form>
            </Style>
        </>
    )
}