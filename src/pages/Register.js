import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Register extends Component {
	state = {}
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
								/>
								<TextField
									className="input-field"
									label="Password"
									margin="normal"
									type="password"
								/>
								<Button variant="contained" color="secondary" style={{ float: 'right', marginLeft: '5px' }}>
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