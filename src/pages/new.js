import React, { Component } from 'react';
import Navbar from '../components/NavBar';

class New extends Component {
	state = {}
	render() { 
		return (
			<div>
				<Navbar/>
				<h1>New place</h1>
			</div>
		);
	}
}
 
export default New;