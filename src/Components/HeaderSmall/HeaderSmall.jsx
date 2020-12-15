import React from 'react'
import { SmallHeader } from './style'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from '../MenuContent/MenuContent'
import {useState} from 'react'
import {MenuPosition} from './style'
import {MenuStyle} from '../MenuContent/style'

export default function HeaderSmall(props) {
    const [menuOpen,setMenuOpen]= useState(false)
    return(
        <SmallHeader>
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
                </CheeseburgerMenu><br />
                <h1>{props.titulo}</h1>
            </MenuPosition>
        </SmallHeader>
    )
}