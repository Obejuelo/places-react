import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CSSTransition } from 'react-transition-group';

class CardView extends Component {
	state = {
		show : true
	}

	_handleClick = (place) => {
		this.props.hidePlace(place);
	}

	render() { 
		return (
			<CSSTransition
				timeout={300}
				classNames="fade"
				in={this.state.show}
				appear={true}
			>
			<div className="col-xs-12 col-sm-4">
				<Card style={{ marginBottom: '40px' }} >
					<CardMedia
						component="img"
						image={this.props.place.imageUrl}
						title="Places"
					/>
					<CardContent>
						<h3>{this.props.place.title}</h3>
						<p>{this.props.place.description}</p>
					</CardContent>
					<CardActions style={{ float: 'right' }}>
						<Button size="small" color="secondary">
							Ver más
						</Button>
							<Button size="small" color="secondary" onClick={() => {this.props.hidePlace(this.props.place); this.setState({show: !this.state.show})}}>
							Eliminar
						</Button>
					</CardActions>
				</Card>
			</div>
			</CSSTransition>
		);
	}
}
 
export default CardView;