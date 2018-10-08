import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import LogIn from './navigation/logIn';
import LogOut from './navigation/logOut';
import * as actions from '../actions/userActions';

class NavBar extends Component {

	componentDidMount(){
		// console.log(this.props.user);	
	}

	signOut = () => {
		this.props.dispatch(actions.logOut());
	}

	render() { 
		return (
			<AppBar position="static" color="primary" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
				<Toolbar style={{ color: '#f2f2f2' }}>
					<Link to="/" style={{color:'#f5f5f5'}}>
						{this.props.user.jwt ? <h1>Bienvenido: {this.props.user.name}</h1> : <h1>Places</h1> }
					</Link>
				</Toolbar>
				{this.props.user.jwt ? <LogOut log={this.signOut}/> : <LogIn/>}
			</AppBar>
		);
	}
}

const mapeStateToProps = (state, ownProps) => {
	return {
		user: state.user
	}
}
 
export default connect(mapeStateToProps)(NavBar);