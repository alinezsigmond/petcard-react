import React from 'react';
import { Link } from 'react-router-dom'

import {Icons} from './style' // Estilo
//Componentes
import Icon from '../../Components/Icon/Icon'
import Header from '../../Components/HeaderLogged/HeaderLogged'
// Imagens
import Paw from '../../assets/images/paw-small.svg'
import Calendar from '../../assets/images/cal-icon.svg'
import Tips from '../../assets/images/dicas.svg'
import Clinics from '../../assets/images/clinicas.svg'
import Notifications from '../../assets/images/alert.svg'
import Logout from '../../assets/images/logout.svg'
import Profile from '../../assets/images/profile.svg'

function Dash() {
  return (
    <>
      <Icons>
        <Header img={Profile} titulo='Aline Zsigmond' />
        <div className='dash'>
          <Link to='/meuspets' ><Icon img={Paw} text='Meus pets'/></Link>
          <Link to='/calendario'><Icon img={Calendar} text='Calendário' /></Link>
          <Icon img={Tips} text='Dicas' />
          <Icon img={Clinics} text='Clínicas próximas' />
          <Link to='/notificacoes'><Icon img={Notifications} text='Notificações' /></Link>
          <Link to='/' ><Icon img={Logout} text='Sair' /></Link>
        </div>
      </Icons>
    </>
  );
}

export default Dash;
