import React, { Component } from 'react';
import CardView from '../components/populares/cardView';
import Header from '../components/header/Header';
import NavBar from '../components/NavBar';
import data from '../helpers/places';

class Home extends Component {
	 state = {
	 	places: data.places
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
 
export default Home;