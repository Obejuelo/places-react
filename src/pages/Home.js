import React, { Component } from 'react';
import CardView from '../components/populares/cardView';
import {connect} from 'react-redux';

import Header from '../components/header/Header';
import NavBar from '../components/NavBar';
import data from '../helpers/places';
import * as actions from '../actions/placesActions';
import { getPlaces } from '../helpers/places';

class Home extends Component {

	// constructor(props){
	// 	super(props);
	// 	console.log(this.props.places);
	// }
	state = {
	 	places: data.places
	}

	componentDidMount(){
		// console.log(this.props.places);
		this.getPlaces();
	}
	
	hidePlace = (place) => {
		let newPlace = this.state.places.filter(el => el !== place);
		this.setState({places: newPlace})
	}

	showCard = () => {
		return(
			this.state.places.map((place, index) => {
				return(<CardView place={place} key={index} hidePlace={this.hidePlace}/>)
			})
		)
	}

	getPlaces = () => {
		getPlaces().then((data) => {
			const places = data.docs.docs;
			this.props.dispatch(actions.loadPlaces(places))
		})
	}

	render() {
		return (
			<div>
				<NavBar/>

				<Header/>

				<div className="sitios" style={{ background: '#5C6BC0', marginTop: '50px'}}>
					<div className="container">
						<div className="col-xs-12">
							<h2 style={{ color: '#f2f2f2' }}>Sitios populares</h2>
						</div>
						<div className="row">
							{this.showCard()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps){
	return {
		places: state.places
	}
}
 
export default connect(mapeStateToProps)(Home);