import React from 'react';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Páginas
import Index from './Pages/Index/Index'
import Cadastro from './Pages/Cadastro/Cadastro'
import Login from './Pages/Login/Login'
import Dash from './Pages/Dashboard/Dashboard'
import MeusPets from './Pages/MeusPets/MeusPets'

// Menu
// import CheeseburgerMenu from 'cheeseburger-menu'
// import HamburgerMenu from 'react-hamburger-menu'
// import MenuContent from './Components/MenuContent/MenuContent'
// import {useState} from 'react';

function App() {
  // const [menuOpen,setMenuOpen]= useState(false)
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} /> 
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/meuspets" component={MeusPets} />
      </Switch>
    </BrowserRouter>
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
      </CheeseburgerMenu>*/}
    </>
  );
}

export default App;
