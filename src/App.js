import React from 'react';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Páginas
import Index from './Pages/Index/Index'
import Cadastro from './Pages/Cadastro/Cadastro'
import Login from './Pages/Login/Login'
import Dash from './Pages/Dashboard/Dashboard'
import MeusPets from './Pages/MeusPets/MeusPets'
import NewDog from './Pages/NewDog/NewDog'
import NewCat from './Pages/NewCat/NewCat';

// Menu
// import CheeseburgerMenu from 'cheeseburger-menu'
// import HamburgerMenu from 'react-hamburger-menu'
// import MenuContent from './Components/MenuContent/MenuContent'
// import {useState} from 'react';

function App() {
  // const [menuOpen,setMenuOpen]= useState(false)
  return (
    <>
     <GlobalFonts />
     {/* <HamburgerMenu
        isOpen={menuOpen}
        menuClicked={()=>setMenuOpen(true)}
        width={22}
        height={18}
        strokeWidth={3}
        rotate={0}
        color='#000'
        borderRadius={2}
        animationDuration={0.5}
      />
      <CheeseburgerMenu
        isOpen={menuOpen}
        closeCallback={()=>setMenuOpen(false)}>
        <MenuContent closeCallback={()=>setMenuOpen(false)}/>
      </CheeseburgerMenu> */}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} /> 
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/meuspets" component={MeusPets} />
        <Route path="/cadastro-cachorro" component={NewDog} />
        <Route path="/cadastro-gato" component={NewCat} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
