import React from 'react';
import GlobalFonts from './assets/fonts/fonts';
import './App.css';
// import {useState} from 'react';

// import Dash from './Pages/Dashboard/Dashboard'
import MeusPets from './Pages/Meus pets/MeusPets'

// import CheeseburgerMenu from 'cheeseburger-menu'
// import HamburgerMenu from 'react-hamburger-menu'
// import MenuContent from './Components/MenuContent/MenuContent'

function App() {
  // const [menuOpen,setMenuOpen]= useState(false)
  return (
    <>
     <GlobalFonts />
    {/*  <HamburgerMenu
        isOpen={menuOpen}
        menuClicked={()=>setMenuOpen(true)}
        width={22}
        height={18}
        strokeWidth={3}
        rotate={0}
        color='#F00'
        borderRadius={2}
        animationDuration={0.5}
      />
      <CheeseburgerMenu
        isOpen={menuOpen}
        closeCallback={()=>setMenuOpen(false)}>
        <MenuContent closeCallback={()=>setMenuOpen(false)}/>
      </CheeseburgerMenu>
      <Dash /> */}
      <MeusPets />
    </>
  );
}

export default App;
