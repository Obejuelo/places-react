import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../actions/placesActions';

// import { getPlaces} from '../helpers/places';
import CardHorizontal from '../components/populares/cardHorizontal';
import Navbar from '../components/NavBar';

class Dashboard extends Component {
	//state = { places: [] }

	componentDidMount(){
		this.props.dispatch(actions.loadAll())
	}

	places = () => {
		return this.props.places.map((place, index) => {
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

function mapeStateToProps(state, ownProps){
	return{
		places: state.places
	}
}
 
export default connect(mapeStateToProps)(Dashboard);