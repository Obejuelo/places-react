import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

class logOut extends Component {
    state = {}
    render() { 
        return (
            <Link to="/">
                <Button 
                    style={{color: '#f5f5f5', marginTop:'15px'}}
                    onClick={this.props.log}>
                    Cerrar sesión
                </Button>
            </Link>
        );
    }
}
 
export default logOut;