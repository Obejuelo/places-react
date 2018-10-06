import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/login';
import Place from '../pages/place';
import Register from '../pages/Register';
import New from '../pages/new';
import '../App.css';
import Dashboard from '../pages/dashboard';

const userRegister = true;

class Router extends Component {

	home(){
		if(userRegister) return Dashboard
		return Home;
  	}

	state = {  }
	render() { 
		return (
			<Switch>
				<Route exact path="/" component={this.home()} />
				<Route path="/lugares/:slug" component={Place} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/new" component={New} />
			</Switch>
		);
	}
}
 
export default Router;