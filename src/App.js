import React from 'react';
import './App.css';

import Icon from './Components/Icon/Icon'
// import Header from './Components/Header/Header'
import Dash from './Pages/Dashboard/Dashboard'

import Paw from './assets/images/paw-small.svg'
// import Calendar from './assets/images/cal-icon.svg'
// import Tips from './assets/images/dicas.svg'
// import Clinics from './assets/images/clinicas.svg'
// import Notifications from './assets/images/alert.svg'
// import Logout from './assets/images/logout.svg'
// import Profile from './assets/images/profile.svg'

function App() {
  return (
    // <Dash />
    <Icon img={Paw} text='Meus Pets' />
  );
}

export default App;
