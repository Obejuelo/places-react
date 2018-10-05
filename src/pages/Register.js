import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import {register} from '../helpers/places';

class Register extends Component {
	state = {}

	create = (e) => {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const pass = document.getElementById('name').value;

		let body = {
			email: name,
			password: pass
		}

		register(body).then(data => {
			console.log(data);
		})
	}

	render() {
		return (
			<div>
				<Navbar />

				<div>
					<div className="row" style={{ marginTop: '-20px', width: '100%', marginLeft: '0' }}>
						<div className="col-xs-12 col-md-6" style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
							<form className="form-login" style={{ height: '200px' }}>
								<TextField
									className="input-field"
									label="Name"
									margin="normal"
									id="name"
								/>
								<TextField
									className="input-field"
									label="Password"
									margin="normal"
									type="password"
									id="pass"
								/>
								<Button variant="contained" color="secondary" style={{ float: 'right', marginLeft: '5px' }} onClick={this.create}>
									Registrar
								</Button>
								<Link to="/login" style={{ float: 'left', marginTop: '15px' }}>¡Ya tengo cuenta!</Link>
							</form>
						</div>
						<div className="col-xs-12 col-md-6" style={{ padding: '0' }}>
							<div className="login-img" style={{ background: `url(${process.env.PUBLIC_URL}/images/friends.jpg) no-repeat` }}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;