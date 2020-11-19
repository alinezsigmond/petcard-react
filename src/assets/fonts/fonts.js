import { createGlobalStyle } from 'styled-components';
import SummitAttack from '../../assets/fonts/Summit-Attack.ttf';
import Quanto from '../../assets/fonts/Quanto.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Quanto';
    src: url(${Quanto});
  }
  @font-face {
    font-family: 'Summit Attack';
    src: url(${SummitAttack});
  }
`;