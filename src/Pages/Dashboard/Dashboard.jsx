import React from 'react';
import './App.css';

import Icon from '../../Components/Icon/Icon'
import Header from '../../Components/Header/Header'

import Paw from '../../assets/images/paw-small.svg'
import Calendar from '../../assets/images/cal-icon.svg'
import Tips from '../../assets/images/dicas.svg'
import Clinics from '../../assets/images/clinicas.svg'
import Notifications from '../../assets/images/alert.svg'
import Logout from '../../assets/images/logout.svg'
import Profile from '../../assets/images/profile.svg'

function Dash() {
  return (
    <div>
        <Header img={Profile} />
        <p>Textinho pra dar um espaço aqui</p>
        <Icon img={Paw} text='Meus pets'/>
        <Icon img={Calendar} text='Calendário' />
        <Icon img={Tips} text='Dicas' />
        <Icon img={Clinics} text='Clínicas próximas' />
        <Icon img={Notifications} text='Notificações' />
        <Icon img={Logout} text='Sair' />
    </div>
  );
}

export default Dash;
