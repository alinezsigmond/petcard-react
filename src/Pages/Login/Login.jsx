import React from 'react'
import {useState} from 'react';
import HeaderLogin from '../../Components/HeaderLogin/HeaderLogin'
import Arrow from '../../assets/images/arrow.svg'
// import Footer from '../../Components/Footer/Footer'
import {LoginStyle, TextStyle, Selection} from './style'
import {Link} from 'react-router-dom'

export default function Login() {
    const [inputs, setInputs] = useState({email: '', password: ''}) 
    const [email] = useState("");
    const [password] = useState("");
    const handleSubmit = (event) => {
        console.log(inputs);
        const login = {
            email: email,
            password: password,
        }
        event.preventDefault();
    }
    const handleInputChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value; 
        setInputs({...inputs, [name]:value}) 
    }
    return (
        <>
            <HeaderLogin option1='Cadastro' option2='Login' />
            <Selection />
            <LoginStyle onSubmit={handleSubmit}>
                <input type="text" name="email" value={inputs.email} onChange={handleInputChange} placeholder='E-mail' />
                <input type="password" name="password" value={inputs.password} onChange={handleInputChange} placeholder='Senha' />
                <button type='submit' > <img src={Arrow} alt='' /> </button>
            </LoginStyle>
                <TextStyle>Esqueceu sua senha?</TextStyle>
            {/* <Link to='/dashboard'><Footer /></Link> */}
        </>
    )
}