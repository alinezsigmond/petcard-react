import React from 'react'
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import Footer from '../../Components/Footer/Footer'
import {LoginStyle} from './style'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <>
            <HeaderLogin />
            <LoginStyle>
                <form className='login'>
                    <input type="text" name="E-mail" placeholder='E-mail' />
                    <input type="password" name="Senha" placeholder='Senha' />
                </form>
                <p>Esqueceu sua senha?</p>
            <Link to='/dashboard'><Footer /></Link>
            </LoginStyle>
        </>
    )
}