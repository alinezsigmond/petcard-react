import React from 'react'

import Icon from '../Icon/Icon'
import {HeaderStyle, MenuPosition} from './style'

// Menu
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from '../MenuContent/MenuContent'
import {useState} from 'react';
import {MenuStyle} from '../MenuContent/style'

export default function Header(props) {
  const [menuOpen,setMenuOpen]= useState(false)
    return (
        <HeaderStyle>
            <MenuPosition>
                <HamburgerMenu
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
                </CheeseburgerMenu>
            </MenuPosition>
            {/* <img className='menuSandwich' src={menu} alt='' /> */}
            <Icon size='b' img={ props.img } text={props.titulo} />
        </HeaderStyle>
    )
}