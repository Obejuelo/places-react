import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/login';
import Place from '../pages/place';
import Register from '../pages/Register';
import New from '../pages/new';
import '../App.css';
import Dashboard from '../pages/dashboard';

// const userRegister = false;

class Router extends Component {

	home(){
		if(this.props.user.jwt) return Dashboard
		return Home;
  	}
	
	componentDidMount(){
		// console.log(this.props.user);
	}

	signIn(){
		if(this.props.user.jwt) return Dashboard
		return Login
	}

	signOut(){
		if(this.props.user.jwt) return Dashboard
		return Register
	}

	render() { 
		return (
			<Switch>
				<Route exact path="/" component={this.home()} />
				<Route path="/lugares/:slug" component={Place} />
				<Route path="/login" component={this.signIn()} />
				<Route path="/register" component={this.signOut()} />
				<Route path="/new" component={New} />
			</Switch>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user
	}
}
 
export default withRouter(connect(mapStateToProps)(Router));