import React from 'react';
// import GlobalFonts from './assets/fonts/fonts';
import './App.css';
import {useState} from 'react';

// import Dash from './Pages/Dashboard/Dashboard'

import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './Components/MenuContent/MenuContent'

function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <>
    {/* <Dash /> */}
      <HamburgerMenu
        isOpen={menuOpen}
        menuClicked={()=>setMenuOpen(true)}
        width={32}
        height={24}
        strokeWidth={5}
        rotate={0}
        color='#3C6382'
        borderRadius={2}
        animationDuration={0.5}
      />
      <CheeseburgerMenu
        isOpen={menuOpen}
        closeCallback={()=>setMenuOpen(false)}>
        <MenuContent closeCallback={()=>setMenuOpen(false)}/>
      </CheeseburgerMenu>
    </>
  );
}

export default App;
