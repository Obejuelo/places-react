import React, { Component } from 'react';
import Navbar from '../components/NavBar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CardHorizontal from '../components/populares/cardHorizontal';
import { Link } from "react-router-dom";

import { getPlaces} from '../helpers/places';

class Dashboard extends Component {
	constructor(props){
		super(props);

		this.getPlaces();
	}
	state = { places: [] }

	getPlaces = () => {
		getPlaces().then((data) => {
			this.setState({places: data.docs.docs})
		})
	}

	places = () => {
		return this.state.places.map((place, index) => {
			return <CardHorizontal key={index} place={place} slug={place._id}/>
		})
	}
	render() { 
		return (
			<div>
				<Navbar></Navbar>
				<Link to="/new">
					<Button variant="fab" color="secondary" aria-label="Add" className="FAV">
						<AddIcon />
					</Button>
				</Link>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-2" style={{textAlign: 'left'}}>
							<Button 
								variant="contained" 
								color="secondary"
								className="btn-dashboard">
								Explorar
							</Button>
							<Button
								variant="contained"
								color="secondary"
								className="btn-dashboard">
								Favoritos
							</Button>
							<Button
								variant="contained"
								color="secondary"
								className="btn-dashboard">
								Visitas previas
							</Button>
						</div>
						<div className="col-xs-12 col-md-10">
							{this.places()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Dashboard;