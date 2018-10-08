import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

class LogIn extends Component {
    state = {}
    render() { 
        return (
            <Link to="/login">
                <Button style={{color: '#f5f5f5', marginTop:'15px'}}>
                    Iniciar sesión
                </Button>
            </Link>
        );
    }
}
 
export default LogIn;