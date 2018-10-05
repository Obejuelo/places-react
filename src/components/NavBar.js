import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';

class NavBar extends Component {
	render() { 
		return (
			<AppBar position="static" color="primary" style={{ marginBottom: '20px' }}>
				<Toolbar style={{ color: '#f2f2f2' }}>
					<Link to="/" style={{color:'#f5f5f5'}}>
						<h1>Places</h1>
					</Link>
				</Toolbar>
			</AppBar>
		);
	}
}
 
export default NavBar;