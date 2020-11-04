import React from 'react';
// import './dashboard.css';
import {Icons} from './style'

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
    <>
      <Icons>
        <Header img={Profile} titulo='Aline Zsigmond' />
        <div className='dash1'>
          <Icon img={Paw} text='Meus pets'/>
          <Icon img={Calendar} text='Calendário' />
          <Icon img={Tips} text='Dicas' />
        </div>
        <div className='dash2'>
          <Icon img={Clinics} text='Clínicas próximas' />
          <Icon img={Notifications} text='Notificações' />
          <Icon img={Logout} text='Sair' />
        </div>
      </Icons>
    </>
  );
}

export default Dash;
