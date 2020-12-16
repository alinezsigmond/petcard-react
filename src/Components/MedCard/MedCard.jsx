import React from 'react'
import { CardStyle } from './style'
import Switch from '@material-ui/core/Switch'

export default function MedCard(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return(
        <CardStyle>
            <p className='med'> {props.med} </p>
            <div className='switch' >
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
            </div>
        </CardStyle>
    )
}