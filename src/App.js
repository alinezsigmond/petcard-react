import React from 'react';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Páginas
import Index from './Pages/Index/Index'
import Cadastro from './Pages/Cadastro/Cadastro'
import Login from './Pages/Login/Login'
import Dash from './Pages/Dashboard/Dashboard'
import MeusPets from './Pages/MeusPets/MeusPets'
import NewDog from './Pages/NewPet/NewDog'
import NewCat from './Pages/NewPet/NewCat'
import Calendario from './Pages/Calendário/Calendario'
import PerfilPet from './Pages/PerfilPet/PerfilPet'
import Notifications from './Pages/Notifications/Notifications'

function App() {
  return (
    <>
    <GlobalFonts />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} /> 
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dash} />
        <Route path="/meuspets" component={MeusPets} />
        <Route path="/cadastro-cachorro" component={NewDog} />
        <Route path="/cadastro-gato" component={NewCat} />
        <Route path='/calendario' component={Calendario} />
        <Route path='/perfilpet' component={PerfilPet} />
        <Route path='/notificacoes' component={Notifications} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
