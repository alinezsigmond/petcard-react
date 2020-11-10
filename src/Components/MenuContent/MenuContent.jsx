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

function MenuContent(props) {
  const menuStyle = {
    backgroundColor: 'rgba(146, 213, 239, 0.300)',
    color: '#3C6382',
    height: '100%',
    textDecoration: 'none',
  }
  return (
      <div className="menu" style={menuStyle}>
      <div className="menu-item">
        <Item style={menuStyle} link="http://www.google.com" img={Home} text='Página Inicial' />
        <Item style={menuStyle} link="http://www.google.com" img={Pets} text='Meus Pets' />
        <Item style={menuStyle} link="http://www.google.com" img={Calendar} text='Calendário' />
        <Item style={menuStyle} link="http://www.google.com" img={Dicas} text='Dicas' />
        <Item style={menuStyle} link="http://www.google.com" img={Clinicas} text='Clínicas próximas' />
        <Item style={menuStyle} link="http://www.google.com" img={Notifications} text='Notificações' />
        <Item style={menuStyle} link="http://www.google.com" img={Logout} text='Logout' />
      </div>

      {/* <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p> */}
    </div>
  )
}
export default MenuContent