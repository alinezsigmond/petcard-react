import React from 'react';
import './App.css';

import Icon from './Components/Icon/Icon'

function App() {
  return (
    <div>
      <p>Olha que bonito meu botão <strong>em react</strong></p>
      <Icon />
      <Icon icon-title='Calendário' />
    </div>
  );
}

export default App;
