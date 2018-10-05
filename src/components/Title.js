import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Title extends Component {
	render() { 
		return (
			<div className="col-xs-6 col-md-3">
				<p style={{ fontSize: '3em', color: '#5C6BC0'}}>Places</p>
				<p>Descubre lugares de manera simple</p>
				<Link to="/Register">
					<Button variant="contained" color="secondary">
							Crear cuenta gratuita
					</Button>
				</Link>
			</div>
		);
	}
}
 
export default Title;