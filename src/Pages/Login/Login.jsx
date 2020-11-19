import React from 'react'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import Footer from '../../Components/Footer/Footer'
import {LoginStyle, TextStyle, Selection} from './style'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <>
            <HeaderLogin />
            <Selection />
            <LoginStyle>
                <input type="text" name="E-mail" placeholder='E-mail' />
                <input type="password" name="Senha" placeholder='Senha' />
            </LoginStyle>
                <TextStyle>Esqueceu sua senha?</TextStyle>
            <Link to='/dashboard'><Footer /></Link>
        </>
    )
}