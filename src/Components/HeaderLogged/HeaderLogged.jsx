import React from 'react'
import {Link} from 'react-router-dom'

import Icon from '../Icon/Icon'
import {HeaderStyle, MenuPosition} from './style'
import Arrow from '../../assets/images/arrow.svg'

// Menu
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from '../MenuContent/MenuContent'
import {useState} from 'react'
import {MenuStyle} from '../MenuContent/style'
import { useLocation } from 'react-router-dom'

export default function Header(props) {
  const [menuOpen,setMenuOpen]= useState(false);
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
    return (
        <HeaderStyle>
            <MenuPosition>
                {usePathname()!=='/perfilpet' && <><HamburgerMenu
                isOpen={menuOpen}
                menuClicked={()=>setMenuOpen(true)}
                width={22}
                height={18}
                strokeWidth={3}
                rotate={0}
                color='#FFF'
                borderRadius={2}
                animationDuration={0.5}
                style={MenuStyle}
                />
                <CheeseburgerMenu
                    isOpen={menuOpen}
                    closeCallback={()=>setMenuOpen(false)}>
                    <MenuContent closeCallback={()=>setMenuOpen(false)}/>
                </CheeseburgerMenu></>}
                {usePathname()==='/perfilpet' && <Link to='meuspets'><img className='back' src={Arrow} alt='' /></Link> }
            </MenuPosition>
            <Icon className='shrink' size='b' img={ props.img } text={props.titulo} />
        </HeaderStyle>
    )
}