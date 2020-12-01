import React from 'react'
import Item from './Item'
// imagens
import Home from '../../assets/images/menu-home.svg'
import Pets from '../../assets/images/menu-pets.svg'
import Calendar from '../../assets/images/menu-cal.svg'
import Dicas from '../../assets/images/menu-dicas.svg'
import Clinicas from '../../assets/images/menu-clinicas.svg'
import Notifications from '../../assets/images/menu-notificacoes.svg'
import Logout from '../../assets/images/menu-logout.svg'
import Avatar from '../../assets/images/avatar-menu.svg'

import { MenuStyle } from './style'

export default function MenuContent(props) {
  
  return (
    <>
    <User name='Aline Zsigmond' location='Foz do Iguaçu, PR' />
    <MenuStyle>
      <div className="menu-item">
        <Item link="/dashboard" img={Home} text='Início' />
        <Item link="/meuspets" img={Pets} text='Meus Pets' />
        <Item link="http://www.google.com" img={Calendar} text='Calendário' />
        <Item link="http://www.google.com" img={Dicas} text='Dicas' />
        <Item link="http://www.google.com" img={Clinicas} text='Clínicas próximas' />
        <Item link="http://www.google.com" img={Notifications} text='Notificações' />
        <Item link="/" img={Logout} text='Logout' />
      </div>
    </MenuStyle>
    </>
  )
}

export function User(props) {
  const UserStyle = {
    backgroundColor: '#3C6382',
    color: '#FFF',
    fontFamily: 'Summit Attack',
    padding: '9%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '15%'
  }
  const NameStyle = {
    fontFamily: 'Summit Attack',
    fontSize: '17px',
    marginBottom: '0',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    paddingTop: '1.5%',
    textAlign: 'left',
    marginLeft: '5%'
  }
  const LocationStyle = {
    fontFamily: 'Summit Attack',
    fontSize: '12px',
    marginTop: '0',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    paddingTop: '0',
    textAlign: 'left',
    marginLeft: '5%'
  }
  const TextStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  return (
    <div style={UserStyle}>
      <img src={Avatar} alt='' /> 
      <div style={TextStyle}>
        <p style={NameStyle}>{props.name}</p>
        <p style={LocationStyle}>{props.location}</p>
      </div>
    </div>
  )
}