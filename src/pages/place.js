import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import {getPlace} from '../helpers/places';

class Place extends Component {
	constructor(props){
		super(props);
		this.state = {
			place: []
		}		
	}
	componentDidMount(){
		const slug = this.props.match.params.slug;
		// console.log(slug);
		this.loadPlace(slug);
	}
	loadPlace = (slug) => {
		getPlace(slug).then(data => {
			// console.log(data);
			this.setState({place: data})
		})
	}

	render() { 
		const {place} = this.state;
		return (
			<div>
				<Navbar/>
				<div className="place-img" style={{background: `url('${place.coverImage}')`}}>
					
				</div>
			</div>
		);
	}
}
 
export default Place;