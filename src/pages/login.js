import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Navbar from '../components/NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import * as actions from '../actions/userActions';
import {signIn} from '../helpers/places';


class Login extends Component {

	// constructor(props){
	// 	super(props);
	// }
	componentDidMount(){
		// console.log(this.props.login.jwt);
	}

	login = (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('pass').value;
		
		let body = {email, password}

		signIn(body)
			.then(data => {
				this.props.dispatch(actions.login(data.jwt));
				this.props.dispatch(actions.loadUser(data.user))
				this.props.history.push('/')	
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
									label="Email"
									margin="normal"
									type="email"
									ref={this.nameRef}
									id="email"
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

function mapeStateToProps(state, ownProps) {
	return {
		login: state.user
	}
}
 
export default withRouter(connect(mapeStateToProps)(Login));