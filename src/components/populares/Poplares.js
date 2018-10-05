import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {CSSTransition} from 'react-transition-group';

let show = true;
class Populares extends Component {
	render() { 
		return (
			
			this.props.places.map((place, index) => {
				return(
					<CSSTransition
						timeout={500}
						classNames="fade"
						in={show}
						appear={true}
					>
					<div className="col-xs-4" key={index}>
						
						<Card style={{ marginBottom: '40px' }} >
							<CardMedia
								component="img"
								image={place.imageUrl}
								title="Contemplative Reptile"
							/>
								
							<CardContent>
								<h3>{place.title}</h3>
								<p>{place.description}</p>
							</CardContent>
							<CardActions style={{float: 'right'}}>
								<Button size="small" color="secondary">
									Ver más
								</Button>
								<Button size="small" color="secondary" onClick={() => { this.props.hide(place); show = !show;}}>
									Eliminar
								</Button>
							</CardActions>
						</Card>
						
					</div>
					</CSSTransition>
					
				)
			})
		);
	}
}
 
export default Populares;