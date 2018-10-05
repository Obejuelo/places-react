import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import {signIn} from '../helpers/places';

class Login extends Component {
		
	nameRef = React.createRef();
	passRef = React.createRef();

	login = (e) => {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const pass = document.getElementById('name').value;
		
		let body = {
			email: name,
			password: pass
		}

		signIn(body).then(data => {
			console.log(data);
		})

	}
	render() { 
		return (
			<div>
				<Navbar/>

				<div>
					<div className="row" style={{marginTop: '-20px', width: '100%', marginLeft: '0'}}>
						<div className="col-xs-12 col-md-6" style={{ display: 'flex',  height: '100vh', alignItems: 'center' }}>
							<form className="form-login" style={{ height: '200px'}}>
								<TextField
									className="input-field"
									label="Name"
									margin="normal"
									ref={this.nameRef}
									id="name"
								/>
								<TextField
									className="input-field"
									label="Password"
									margin="normal"
									type="password"
									ref={this.passRef}
									id="pass"
								/>
								<Button 
									variant="contained" 
									color="secondary" 
									onClick={this.login}
									style={{ float: 'right', marginLeft: '5px' }}>
									Entrar
								</Button>
								<Link to="/register" style={{float: 'left', marginTop: '15px'}}>Crear cuenta nueva</Link>
							</form>
						</div>
						<div className="col-xs-12 col-md-6" style={{padding: '0'}}>
							<div className="login-img" style={{ background: `url(${process.env.PUBLIC_URL}/images/login2.jpg) no-repeat`}}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Login;