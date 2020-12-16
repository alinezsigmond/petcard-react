import React from 'react'
import { Card } from './style'
import Switch from '@material-ui/core/Switch'

export default function NotificationCard(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Card>
            <p className='med'> {props.titulo} </p>
            <div className='switch' >
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            <p className='day'> {props.dia} </p>
            <p className='time'> {props.hora} </p>
        </Card>
    )
}