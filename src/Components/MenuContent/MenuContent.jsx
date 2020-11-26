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
import { MenuStyle } from './style'

export default function MenuContent(props) {
  
  return (
    <>
    <User />
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
    padding: '5%'
  }
  return (
    <div style={UserStyle}>
      oi. era essa  barrinha aqui que eu tava bugada pensando em como fazer
      <br/>descobri =)
      <br />
      <br />
      agora falta colocar o que precisa aqui e feshow
    </div>
  )
}